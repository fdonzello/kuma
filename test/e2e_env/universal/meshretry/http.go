package meshretry

import (
	"fmt"
	"time"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	. "github.com/kumahq/kuma/test/framework"
	"github.com/kumahq/kuma/test/framework/client"
	"github.com/kumahq/kuma/test/framework/envs/universal"
)

func HttpRetry() {
	meshName := "meshretry-http"
	BeforeAll(func() {
		err := NewClusterSetup().
			Install(MeshUniversal(meshName)).
			Install(DemoClientUniversal("demo-client", meshName, WithTransparentProxy(true))).
			Install(TestServerUniversal("test-server", meshName, WithArgs([]string{"echo", "--instance", "universal"}))).
			Setup(universal.Cluster)
		Expect(err).ToNot(HaveOccurred())

		// Delete the default meshretry policy
		Eventually(func() error {
			return universal.Cluster.GetKumactlOptions().RunKumactl("delete", "meshretry", "--mesh", meshName, "mesh-retry-all-"+meshName)
		}).Should(Succeed())
	})

	E2EAfterAll(func() {
		Expect(universal.Cluster.DeleteMeshApps(meshName)).To(Succeed())
		Expect(universal.Cluster.GetKumactlOptions().RunKumactl("delete", "dataplane", "fake-echo-server", "-m", meshName)).To(Succeed())
		Expect(universal.Cluster.DeleteMesh(meshName)).To(Succeed())
	})

	It("should retry on HTTP connection failure", func() {
		echoServerDataplane := fmt.Sprintf(`
type: Dataplane
mesh: "%s"
name: fake-echo-server
networking:
  address:  241.0.0.1
  inbound:
  - port: 7777
    servicePort: 7777
    tags:
      kuma.io/service: test-server
      kuma.io/protocol: http
`, meshName)
		meshRetryPolicy := fmt.Sprintf(`
type: MeshRetry
mesh: "%s"
name: fake-meshretry-policy
spec:
  targetRef:
    kind: MeshService
    name: demo-client
  to:
    - targetRef:
        kind: MeshService
        name: test-server
      default:
        http:
          numRetries: 5
`, meshName)

		By("Checking requests succeed")
		Eventually(func(g Gomega) {
			_, err := client.CollectEchoResponse(
				universal.Cluster, "demo-client", "test-server.mesh",
			)
			g.Expect(err).ToNot(HaveOccurred())
		}).Should(Succeed())
		Consistently(func(g Gomega) {
			// --max-time 8 to wait for 8 seconds to beat the default 5s connect timeout
			_, err := client.CollectEchoResponse(
				universal.Cluster, "demo-client", "test-server.mesh",
				client.WithMaxTime(8),
			)
			g.Expect(err).ToNot(HaveOccurred())
		}).Should(Succeed())

		By("Adding a faulty dataplane")
		Expect(universal.Cluster.Install(YamlUniversal(echoServerDataplane))).To(Succeed())

		By("Check some errors happen")
		var errs []error
		for i := 0; i < 50; i++ {
			time.Sleep(time.Millisecond * 100)
			_, err := client.CollectEchoResponse(
				universal.Cluster, "demo-client", "test-server.mesh",
				client.WithMaxTime(8),
			)
			if err != nil {
				errs = append(errs, err)
			}
		}
		Expect(errs).ToNot(BeEmpty())

		By("Apply a MeshRetry policy")
		Expect(universal.Cluster.Install(YamlUniversal(meshRetryPolicy))).To(Succeed())

		By("Eventually all requests succeed consistently")
		Eventually(func(g Gomega) {
			_, err := client.CollectEchoResponse(
				universal.Cluster, "demo-client", "test-server.mesh",
				client.WithMaxTime(8),
			)
			g.Expect(err).ToNot(HaveOccurred())
		}, "1m", "1s", MustPassRepeatedly(5)).Should(Succeed())
	})
}
