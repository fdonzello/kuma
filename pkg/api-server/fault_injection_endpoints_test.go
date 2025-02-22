package api_server_test

import (
	"context"
	"io"
	"time"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"sigs.k8s.io/yaml"

	mesh_proto "github.com/kumahq/kuma/api/mesh/v1alpha1"
	api_server "github.com/kumahq/kuma/pkg/api-server"
	"github.com/kumahq/kuma/pkg/core"
	core_mesh "github.com/kumahq/kuma/pkg/core/resources/apis/mesh"
	"github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/core/resources/model/rest/unversioned"
	"github.com/kumahq/kuma/pkg/core/resources/store"
	"github.com/kumahq/kuma/pkg/plugins/resources/memory"
)

var _ = Describe("FaultInjection Endpoints", func() {
	var apiServer *api_server.ApiServer
	var resourceStore store.ResourceStore
	var client resourceApiClient
	stop := func() {}

	BeforeEach(func() {
		core.Now = func() time.Time {
			now, _ := time.Parse(time.RFC3339, "2018-07-17T16:05:36.995+00:00")
			return now
		}
		resourceStore = memory.NewStore()
		apiServer, _, stop = StartApiServer(NewTestApiServerConfigurer().WithStore(resourceStore))
		client = resourceApiClient{
			apiServer.Address(),
			"/meshes/default/fault-injections",
		}
	})

	AfterEach(func() {
		stop()
		core.Now = time.Now
	})

	BeforeEach(func() {
		// when
		err := resourceStore.Create(context.Background(), core_mesh.NewMeshResource(), store.CreateByKey(model.DefaultMesh, model.NoMesh))
		// then
		Expect(err).ToNot(HaveOccurred())
	})

	Describe("PUT => GET", func() {
		given := `
        type: FaultInjection
        name: web-to-backend
        mesh: default
        creationTime: "2018-07-17T16:05:36.995Z"
        modificationTime: "2018-07-17T16:05:36.995Z"
        labels:
          kuma.io/origin: zone
        sources:
        - match:
            service: web
            kuma.io/protocol: http
        destinations:
        - match:
            service: backend
            kuma.io/protocol: http
        conf:
          abort:
            httpStatus: 500
            percentage: 40
          delay:
            percentage: 50
            value: 0.010s
          responseBandwidth:
            limit: 50kbps
            percentage: 40
`
		It("GET should return data saved by PUT", func() {
			// given
			resource := &unversioned.Resource{
				Spec: &mesh_proto.FaultInjection{},
			}

			// when
			err := yaml.Unmarshal([]byte(given), &resource)
			// then
			Expect(err).ToNot(HaveOccurred())

			// when
			response := client.put(resource)
			// then
			Expect(response.StatusCode).To(Equal(201))

			// when
			response = client.get("web-to-backend")
			// then
			Expect(response.StatusCode).To(Equal(200))
			// when
			body, err := io.ReadAll(response.Body)
			// then
			Expect(err).ToNot(HaveOccurred())

			// when
			actual, err := yaml.JSONToYAML(body)
			// then
			Expect(err).ToNot(HaveOccurred())
			// and
			Expect(actual).To(MatchYAML(given))
		})
	})
})
