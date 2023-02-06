import{u as j}from"./vue-router-d8e03a07.js";import{e as I}from"./kongponents.es-c2485d1e.js";import{C as q}from"./ContentWrapper-37eae07f.js";import{u as N}from"./store-96085224.js";import{D as M}from"./DoughnutChart-323eb437.js";import{d as S,c as p,s as L,o as n,h as l,e as d,u as c,f as o,r as y,i as z,w as k,b as D,F as b,g as u,m as x,t as m,a as E}from"./runtime-dom.esm-bundler-32659b48.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{M as G}from"./MeshResources-9bf6159b.js";import{_ as H}from"./LabelList.vue_vue_type_style_index_0_lang-964d6215.js";import{_ as J}from"./YamlView.vue_vue_type_script_setup_true_lang-bf98ccc0.js";import{k as T}from"./kumaApi-302acf12.js";import{o as Q,k as $}from"./production-c33f040b.js";import"./index-7ce7c993.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-76f6a5d9.js";import"./ErrorBlock-bd1e3860.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-c9a3fc78.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-a6bd5c2b.js";import"./_commonjsHelpers-edff4021.js";import"./toYaml-4e00099e.js";const U={class:"chart-box-list"},X=S({__name:"MeshCharts",setup(O){const r=N(),_=p(()=>r.getters.getChart("services",{title:"Services",showTotal:!0})),f=p(()=>r.getters.getChart("dataplanes",{title:"DP Proxies",showTotal:!0,isStatusChart:!0})),g=p(()=>r.getters.getChart("kumaDPVersions",{title:"Kuma DP",subtitle:"versions"})),v=p(()=>r.getters.getChart("envoyVersions",{title:"Envoy",subtitle:"versions"}));L(()=>r.state.selectedMesh,function(){a()}),a();function a(){r.dispatch("fetchMeshInsights",r.state.selectedMesh),r.dispatch("fetchServices",r.state.selectedMesh)}return(B,w)=>(n(),l("div",U,[d(M,{data:c(_)},null,8,["data"]),o(),d(M,{data:c(f)},null,8,["data"]),o(),d(M,{data:c(g)},null,8,["data"]),o(),d(M,{data:c(v)},null,8,["data"])]))}});const Y=A(X,[["__scopeId","data-v-62ff2edc"]]),Z={key:0},ee={key:1},te={key:1},ae={class:"policy-counts"},se={key:0},ne={key:0,class:"mt-4"},oe=S({__name:"MeshOverviewView",setup(O){const r=j(),_=N(),f=y(!0),g=y(!1),v=y(!1),a=y(null),B=y(null),w=p(()=>a.value!==null?Q(a.value):null),R=p(()=>{if(a.value===null)return null;const{name:t,type:s,creationTime:h,modificationTime:e}=a.value;return{name:t,type:s,created:$(h),modified:$(e),"Data Plane Proxies":_.state.meshInsight.dataplanes.total}}),F=p(()=>{var P;if(a.value===null)return null;const t=C(a.value,"mtls"),s=C(a.value,"logging"),h=C(a.value,"metrics"),e=C(a.value,"tracing"),i=Boolean((P=a.value.routing)==null?void 0:P.localityAwareLoadBalancing);return{mtls:t,logging:s,metrics:h,tracing:e,localityAwareLoadBalancing:i}}),K=p(()=>_.state.sidebar.insights.mesh.policies.total),W=p(()=>_.state.policyTypes.map(t=>{var s;return{...t,length:((s=_.state.meshInsight.policies[t.name])==null?void 0:s.total)??0}}));L(()=>r.params.mesh,function(){r.name==="single-mesh-overview"&&(f.value=!0,v.value=!1,g.value=!1,V())}),V();async function V(){f.value=!0,v.value=!1;const t=r.params.mesh;try{a.value=await T.getMesh({name:t}),B.value=await T.getMeshInsights({name:t})}catch(s){g.value=!0,v.value=!0,console.error(s)}finally{f.value=!1}}function C(t,s){if(t===null||t[s]===void 0)return!1;const h=t[s].enabledBackend??t[s].defaultBackend??t[s].backends[0].name,e=t[s].backends.find(i=>i.name===h);return`${e.type} / ${e.name}`}return(t,s)=>{const h=z("router-link");return n(),l(b,null,[d(Y,{class:"mt-24"}),o(),d(q,{class:"mt-8"},{content:k(()=>[a.value!==null?(n(),l("div",Z,[d(H,{"has-error":g.value,"is-loading":f.value,"is-empty":v.value},{default:k(()=>[u("div",null,[u("ul",null,[(n(!0),l(b,null,x(c(R),(e,i)=>(n(),l("li",{key:i},[u("h4",null,m(i),1),o(),typeof e=="boolean"?(n(),E(c(I),{key:0,appearance:e?"success":"danger"},{default:k(()=>[o(m(e?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(n(),l("p",ee,m(e),1))]))),128))])]),o(),u("div",null,[u("ul",null,[(n(!0),l(b,null,x(c(F),(e,i)=>(n(),l("li",{key:i},[u("h4",null,m(i),1),o(),typeof e=="boolean"?(n(),E(c(I),{key:0,appearance:e?"success":"danger"},{default:k(()=>[o(m(e?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(n(),l("p",te,m(e),1))]))),128))])]),o(),u("div",null,[u("ul",ae,[u("li",null,[u("h4",null,`
                  Policies (`+m(c(K))+`)
                `,1),o(),u("ul",null,[(n(!0),l(b,null,x(c(W),(e,i)=>(n(),l(b,{key:i},[e.length!==0?(n(),l("li",se,[d(h,{to:{name:"policy",params:{policyPath:e.path}}},{default:k(()=>[o(m(e.name)+": "+m(e.length),1)]),_:2},1032,["to"])])):D("",!0)],64))),128))])])])])]),_:1},8,["has-error","is-loading","is-empty"])])):D("",!0)]),_:1}),o(),c(w)!==null?(n(),l("div",ne,[d(J,{id:"code-block-mesh",content:c(w)},null,8,["content"])])):D("",!0),o(),d(G,{class:"mt-6"})],64)}}});const De=A(oe,[["__scopeId","data-v-1ccb92a3"]]);export{De as default};
