import{d as q,r as Q,o as e,e as l,g as a,F as g,s as R,q as y,t as p,h as n,w as t,f as N,a as u,B as _e,b as _,Y as me,p as ve,m as he,$ as re,j as B,c as K,J as ge,z as fe,K as ke,G as j,L as be,v as we,M as $e}from"./index-5bf387f8.js";import{A as V,a as X,S as Te,b as Oe}from"./SubscriptionHeader-0dbf15e9.js";import{f as Y,m as ce,p as ee,E as te,q as ae,g as pe,e as Pe,D as F,S as De,o as ue,A as Ee,_ as Le}from"./RouteView.vue_vue_type_script_setup_true_lang-b355ac4a.js";import{_ as de}from"./CodeBlock.vue_vue_type_style_index_0_lang-6fdfaad6.js";import{P as ye}from"./PolicyTypeTag-d7c57311.js";import{T as U}from"./TagList-d6ae7a9a.js";import{t as ie,_ as Ae}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-f6396ca6.js";import{E as ne}from"./EnvoyData-6b1fa3bf.js";import{T as Se}from"./TabsWidget-9a6e05ab.js";import{T as Ce}from"./TextWithCopyButton-99975dc4.js";import{_ as xe}from"./WarningsWidget.vue_vue_type_script_setup_true_lang-5b2c99c3.js";import{a as Re,d as oe,b as Ge,p as Ie,c as Me,C as Ne,I as qe,e as Be}from"./dataplane-30467516.js";import{_ as je}from"./RouteTitle.vue_vue_type_script_setup_true_lang-f57f5b99.js";import"./CopyButton-457b1b54.js";const W=v=>(ve("data-v-d6898838"),v=v(),he(),v),Fe={class:"mesh-gateway-policy-list"},Ke=W(()=>y("h3",{class:"mb-2"},`
      Gateway policies
    `,-1)),ze={key:0},He=W(()=>y("h3",{class:"mt-6 mb-2"},`
      Listeners
    `,-1)),Ue=W(()=>y("b",null,"Host",-1)),We=W(()=>y("h4",{class:"mt-2 mb-2"},`
              Routes
            `,-1)),Ye={class:"dataplane-policy-header"},Ze=W(()=>y("b",null,"Route",-1)),Je=W(()=>y("b",null,"Service",-1)),Qe={key:0,class:"badge-list"},Ve={class:"mt-1"},Xe=q({__name:"MeshGatewayDataplanePolicyList",props:{meshGatewayDataplane:{type:Object,required:!0},meshGatewayListenerEntries:{type:Array,required:!0},meshGatewayRoutePolicies:{type:Array,required:!0}},setup(v){const s=v;return(r,E)=>{const O=Q("router-link");return e(),l("div",Fe,[Ke,a(),v.meshGatewayRoutePolicies.length>0?(e(),l("ul",ze,[(e(!0),l(g,null,R(v.meshGatewayRoutePolicies,(f,w)=>(e(),l("li",{key:w},[y("span",null,p(f.type),1),a(`:

        `),n(O,{to:f.route},{default:t(()=>[a(p(f.name),1)]),_:2},1032,["to"])]))),128))])):N("",!0),a(),He,a(),y("div",null,[(e(!0),l(g,null,R(s.meshGatewayListenerEntries,(f,w)=>(e(),l("div",{key:w},[y("div",null,[y("div",null,[Ue,a(": "+p(f.hostName)+":"+p(f.port)+" ("+p(f.protocol)+`)
          `,1)]),a(),f.routeEntries.length>0?(e(),l(g,{key:0},[We,a(),n(X,{"initially-open":[],"multiple-open":""},{default:t(()=>[(e(!0),l(g,null,R(f.routeEntries,(m,b)=>(e(),u(V,{key:b},_e({"accordion-header":t(()=>[y("div",Ye,[y("div",null,[y("div",null,[Ze,a(": "),n(O,{to:m.route},{default:t(()=>[a(p(m.routeName),1)]),_:2},1032,["to"])]),a(),y("div",null,[Je,a(": "+p(m.service),1)])]),a(),m.policies.length>0?(e(),l("div",Qe,[(e(!0),l(g,null,R(m.policies,(i,k)=>(e(),u(_(me),{key:`${w}-${k}`},{default:t(()=>[a(p(i.type),1)]),_:2},1024))),128))])):N("",!0)])]),_:2},[m.policies.length>0?{name:"accordion-content",fn:t(()=>[y("ul",Ve,[(e(!0),l(g,null,R(m.policies,(i,k)=>(e(),l("li",{key:`${w}-${k}`},[a(p(i.type)+`:

                      `,1),n(O,{to:i.route},{default:t(()=>[a(p(i.name),1)]),_:2},1032,["to"])]))),128))])]),key:"0"}:void 0]),1024))),128))]),_:2},1024)],64)):N("",!0)])]))),128))])])}}});const et=Y(Xe,[["__scopeId","data-v-d6898838"]]),tt={class:"policy-type-heading"},at={class:"policy-list"},st={key:0},nt=q({__name:"PolicyTypeEntryList",props:{id:{type:String,required:!1,default:"entry-list"},policyTypeEntries:{type:Object,required:!0}},setup(v){const s=v,r=[{label:"From",key:"sourceTags"},{label:"To",key:"destinationTags"},{label:"On",key:"name"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}];function E({headerKey:O}){return{class:`cell-${O}`}}return(O,f)=>{const w=Q("router-link");return e(),u(X,{"initially-open":[],"multiple-open":""},{default:t(()=>[(e(!0),l(g,null,R(s.policyTypeEntries,(m,b)=>(e(),u(V,{key:b},{"accordion-header":t(()=>[y("h3",tt,[n(ye,{"policy-type":m.type},{default:t(()=>[a(p(m.type)+" ("+p(m.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":t(()=>[y("div",at,[n(_(re),{class:"policy-type-table",fetcher:()=>({data:m.connections,total:m.connections.length}),headers:r,"cell-attrs":E,"disable-pagination":"","is-clickable":""},{sourceTags:t(({rowValue:i})=>[i.length>0?(e(),u(U,{key:0,class:"tag-list",tags:i},null,8,["tags"])):(e(),l(g,{key:1},[a(`
                —
              `)],64))]),destinationTags:t(({rowValue:i})=>[i.length>0?(e(),u(U,{key:0,class:"tag-list",tags:i},null,8,["tags"])):(e(),l(g,{key:1},[a(`
                —
              `)],64))]),name:t(({rowValue:i})=>[i!==null?(e(),l(g,{key:0},[a(p(i),1)],64)):(e(),l(g,{key:1},[a(`
                —
              `)],64))]),origins:t(({rowValue:i})=>[i.length>0?(e(),l("ul",st,[(e(!0),l(g,null,R(i,(k,S)=>(e(),l("li",{key:`${b}-${S}`},[n(w,{to:k.route},{default:t(()=>[a(p(k.name),1)]),_:2},1032,["to"])]))),128))])):(e(),l(g,{key:1},[a(`
                —
              `)],64))]),config:t(({rowValue:i,rowKey:k})=>[i!==null?(e(),u(de,{key:0,id:`${s.id}-${b}-${k}-code-block`,code:i,language:"yaml","show-copy-button":!1},null,8,["id","code"])):(e(),l(g,{key:1},[a(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}});const lt=Y(nt,[["__scopeId","data-v-71c85650"]]),it={class:"policy-type-heading"},ot={class:"policy-list"},rt={key:1,class:"tag-list-wrapper"},ct={key:0},pt={key:1},ut={key:0},dt={key:0},yt=q({__name:"RuleEntryList",props:{id:{type:String,required:!1,default:"entry-list"},ruleEntries:{type:Object,required:!0}},setup(v){const s=v,r=[{label:"Type",key:"type"},{label:"Addresses",key:"addresses"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}];function E({headerKey:O}){return{class:`cell-${O}`}}return(O,f)=>{const w=Q("router-link");return e(),u(X,{"initially-open":[],"multiple-open":""},{default:t(()=>[(e(!0),l(g,null,R(s.ruleEntries,(m,b)=>(e(),u(V,{key:b},{"accordion-header":t(()=>[y("h3",it,[n(ye,{"policy-type":m.type},{default:t(()=>[a(p(m.type)+" ("+p(m.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":t(()=>[y("div",ot,[n(_(re),{class:"policy-type-table",fetcher:()=>({data:m.connections,total:m.connections.length}),headers:r,"cell-attrs":E,"disable-pagination":"","is-clickable":""},{type:t(({rowValue:i})=>[i.sourceTags.length===0&&i.destinationTags.length===0?(e(),l(g,{key:0},[a(`
                —
              `)],64)):(e(),l("div",rt,[i.sourceTags.length>0?(e(),l("div",ct,[a(`
                  From

                  `),n(U,{class:"tag-list",tags:i.sourceTags},null,8,["tags"])])):N("",!0),a(),i.destinationTags.length>0?(e(),l("div",pt,[a(`
                  To

                  `),n(U,{class:"tag-list",tags:i.destinationTags},null,8,["tags"])])):N("",!0)]))]),addresses:t(({rowValue:i})=>[i.length>0?(e(),l("ul",ut,[(e(!0),l(g,null,R(i,(k,S)=>(e(),l("li",{key:`${b}-${S}`},p(k),1))),128))])):(e(),l(g,{key:1},[a(`
                —
              `)],64))]),origins:t(({rowValue:i})=>[i.length>0?(e(),l("ul",dt,[(e(!0),l(g,null,R(i,(k,S)=>(e(),l("li",{key:`${b}-${S}`},[n(w,{to:k.route},{default:t(()=>[a(p(k.name),1)]),_:2},1032,["to"])]))),128))])):(e(),l(g,{key:1},[a(`
                —
              `)],64))]),config:t(({rowValue:i,rowKey:k})=>[i!==null?(e(),u(de,{key:0,id:`${s.id}-${b}-${k}-code-block`,code:i,language:"yaml","show-copy-button":!1},null,8,["id","code"])):(e(),l(g,{key:1},[a(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}});const _t=Y(yt,[["__scopeId","data-v-74be3da4"]]),mt=y("h2",{class:"visually-hidden"},`
    Policies
  `,-1),vt={key:0,class:"mt-2"},ht=y("h2",{class:"mb-2"},`
      Rules
    `,-1),gt=q({__name:"SidecarDataplanePolicyList",props:{dppName:{type:String,required:!0},policyTypeEntries:{type:Object,required:!0},ruleEntries:{type:Array,required:!0}},setup(v){const s=v;return(r,E)=>(e(),l(g,null,[mt,a(),n(lt,{id:"policies","policy-type-entries":s.policyTypeEntries,"data-testid":"policy-list"},null,8,["policy-type-entries"]),a(),v.ruleEntries.length>0?(e(),l("div",vt,[ht,a(),n(_t,{id:"rules","rule-entries":s.ruleEntries,"data-testid":"rule-list"},null,8,["rule-entries"])])):N("",!0)],64))}}),ft={key:2,class:"policies-list"},kt={key:3,class:"policies-list"},bt=q({__name:"DataplanePolicies",props:{dataplaneOverview:{type:Object,required:!0},policyTypes:{type:Array,required:!0}},setup(v){const s=v,r=ce(),E=B(null),O=B([]),f=B([]),w=B([]),m=B([]),b=B(!0),i=B(null),k=K(()=>s.policyTypes.reduce((o,d)=>Object.assign(o,{[d.name]:d}),{}));ge(()=>s.dataplaneOverview.name,function(){S()}),S();async function S(){var o,d;i.value=null,b.value=!0,O.value=[],f.value=[],w.value=[],m.value=[];try{if(((d=(o=s.dataplaneOverview.dataplane.networking.gateway)==null?void 0:o.type)==null?void 0:d.toUpperCase())==="BUILTIN")E.value=await r.getMeshGatewayDataplane({mesh:s.dataplaneOverview.mesh,name:s.dataplaneOverview.name}),w.value=Z(E.value),m.value=J(E.value.policies);else{const{items:c}=await r.getSidecarDataplanePolicies({mesh:s.dataplaneOverview.mesh,name:s.dataplaneOverview.name});O.value=C(c??[]);const{items:$}=await r.getDataplaneRules({mesh:s.dataplaneOverview.mesh,name:s.dataplaneOverview.name});f.value=G($??[])}}catch(h){h instanceof Error?i.value=h:console.error(h)}finally{b.value=!1}}function Z(o){const d=[],h=o.listeners??[];for(const c of h)for(const $ of c.hosts)for(const P of $.routes){const L=[];for(const A of P.destinations){const T=J(A.policies),M={routeName:P.route,route:{name:"policy-detail-view",params:{mesh:o.gateway.mesh,policyPath:"meshgatewayroutes",policy:P.route}},service:A.tags["kuma.io/service"],policies:T};L.push(M)}d.push({protocol:c.protocol,port:c.port,hostName:$.hostName,routeEntries:L})}return d}function J(o){if(o===void 0)return[];const d=[];for(const h of Object.values(o)){const c=k.value[h.type];d.push({type:h.type,name:h.name,route:{name:"policy-detail-view",params:{mesh:h.mesh,policyPath:c.path,policy:h.name}}})}return d}function C(o){const d=new Map;for(const c of o){const{type:$,service:P}=c,L=typeof P=="string"&&P!==""?[{label:"kuma.io/service",value:P}]:[],A=$==="inbound"||$==="outbound"?c.name:null;for(const[T,M]of Object.entries(c.matchedPolicies)){d.has(T)||d.set(T,{type:T,connections:[]});const z=d.get(T),H=k.value[T];for(const le of M){const I=x(le,H,c,L,A);z.connections.push(...I)}}}const h=Array.from(d.values());return h.sort((c,$)=>c.type.localeCompare($.type)),h}function x(o,d,h,c,$){const P=o.conf&&Object.keys(o.conf).length>0?ie(o.conf):null,A=[{name:o.name,route:{name:"policy-detail-view",params:{mesh:o.mesh,policyPath:d.path,policy:o.name}}}],T=[];if(h.type==="inbound"&&Array.isArray(o.sources))for(const{match:M}of o.sources){const H={sourceTags:[{label:"kuma.io/service",value:M["kuma.io/service"]}],destinationTags:c,name:$,config:P,origins:A};T.push(H)}else{const z={sourceTags:[],destinationTags:c,name:$,config:P,origins:A};T.push(z)}return T}function G(o){const d=new Map;for(const c of o){d.has(c.policyType)||d.set(c.policyType,{type:c.policyType,connections:[]});const $=d.get(c.policyType),P=k.value[c.policyType],L=D(c,P);$.connections.push(...L)}const h=Array.from(d.values());return h.sort((c,$)=>c.type.localeCompare($.type)),h}function D(o,d){const{type:h,service:c,subset:$,conf:P}=o,L=$?Object.entries($):[];let A,T;h==="ClientSubset"?L.length>0?A=L.map(([I,se])=>({label:I,value:se})):A=[{label:"kuma.io/service",value:"*"}]:A=[],h==="DestinationSubset"?L.length>0?T=L.map(([I,se])=>({label:I,value:se})):typeof c=="string"&&c!==""?T=[{label:"kuma.io/service",value:c}]:T=[{label:"kuma.io/service",value:"*"}]:h==="ClientSubset"&&typeof c=="string"&&c!==""?T=[{label:"kuma.io/service",value:c}]:T=[];const M=o.addresses??[],z=P&&Object.keys(P).length>0?ie(P):null,H=[];for(const I of o.origins)H.push({name:I.name,route:{name:"policy-detail-view",params:{mesh:I.mesh,policyPath:d.path,policy:I.name}}});return[{type:{sourceTags:A,destinationTags:T},addresses:M,config:z,origins:H}]}return(o,d)=>b.value?(e(),u(ee,{key:0})):i.value!==null?(e(),u(te,{key:1,error:i.value},null,8,["error"])):O.value.length>0?(e(),l("div",ft,[n(gt,{"dpp-name":s.dataplaneOverview.name,"policy-type-entries":O.value,"rule-entries":f.value},null,8,["dpp-name","policy-type-entries","rule-entries"])])):w.value.length>0&&E.value!==null?(e(),l("div",kt,[n(et,{"mesh-gateway-dataplane":E.value,"mesh-gateway-listener-entries":w.value,"mesh-gateway-route-policies":m.value},null,8,["mesh-gateway-dataplane","mesh-gateway-listener-entries","mesh-gateway-route-policies"])])):(e(),u(ae,{key:4}))}});const wt=Y(bt,[["__scopeId","data-v-f57d0877"]]),$t={key:3},Tt=q({__name:"StatusInfo",props:{isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},error:{type:[Error,null],required:!1,default:null}},setup(v){return(s,r)=>(e(),l("div",null,[v.isLoading?(e(),u(ee,{key:0})):v.hasError||v.error!==null?(e(),u(te,{key:1,error:v.error},null,8,["error"])):v.isEmpty?(e(),u(ae,{key:2})):(e(),l("div",$t,[fe(s.$slots,"default")]))]))}}),Ot={class:"stack"},Pt={class:"variable-columns"},Dt={class:"status-with-reason"},Et=["href"],Lt={class:"columns",style:{"--columns":"3"}},At=q({__name:"DataPlaneDetails",props:{dataplaneOverview:{type:Object,required:!0}},setup(v){const s=v,{t:r,formatIsoDate:E}=pe(),O=ce(),f=Pe(),w=[{hash:"#overview",title:r("data-planes.routes.item.tabs.overview")},{hash:"#insights",title:r("data-planes.routes.item.tabs.insights")},{hash:"#dpp-policies",title:r("data-planes.routes.item.tabs.policies")},{hash:"#xds-configuration",title:r("data-planes.routes.item.tabs.xds_configuration")},{hash:"#envoy-stats",title:r("data-planes.routes.item.tabs.stats")},{hash:"#envoy-clusters",title:r("data-planes.routes.item.tabs.clusters")}],m=K(()=>Re(s.dataplaneOverview.dataplane,s.dataplaneOverview.dataplaneInsight)),b=K(()=>oe(s.dataplaneOverview.dataplane)),i=K(()=>Ge(s.dataplaneOverview.dataplaneInsight)),k=K(()=>Ie(s.dataplaneOverview,E)),S=K(()=>{var x;const C=Array.from(((x=s.dataplaneOverview.dataplaneInsight)==null?void 0:x.subscriptions)??[]);return C.reverse(),C}),Z=K(()=>{var o;const C=((o=s.dataplaneOverview.dataplaneInsight)==null?void 0:o.subscriptions)??[];if(C.length===0)return[];const x=C[C.length-1];if(!("version"in x)||!x.version)return[];const G=[],D=x.version;if(D.kumaDp&&D.envoy){const d=Me(D);d.kind!==Ne&&d.kind!==qe&&G.push(d)}return f.getters["config/getMulticlusterStatus"]&&oe(s.dataplaneOverview.dataplane).find(c=>c.label===ke)&&typeof D.kumaDp.kumaCpCompatible=="boolean"&&!D.kumaDp.kumaCpCompatible&&G.push({kind:Be,payload:{kumaDp:D.kumaDp.version}}),G});async function J(C){const{mesh:x,name:G}=s.dataplaneOverview;return await O.getDataplaneFromMesh({mesh:x,name:G},C)}return(C,x)=>{const G=Q("RouterLink");return e(),u(Se,{tabs:w},{overview:t(()=>[y("div",Ot,[Z.value.length>0?(e(),u(xe,{key:0,warnings:Z.value,"data-testid":"data-plane-warnings"},null,8,["warnings"])):N("",!0),a(),n(_(j),null,{body:t(()=>[y("div",Pt,[n(F,null,{title:t(()=>[a(p(_(r)("http.api.property.status")),1)]),body:t(()=>[y("div",Dt,[n(De,{status:m.value.status},null,8,["status"]),a(),m.value.reason.length>0?(e(),u(_(be),{key:0,label:m.value.reason.join(", "),class:"reason-tooltip"},{default:t(()=>[n(_(we),{icon:"info",size:"20","hide-title":""})]),_:1},8,["label"])):N("",!0)])]),_:1}),a(),n(F,null,{title:t(()=>[a(p(_(r)("http.api.property.name")),1)]),body:t(()=>[n(Ce,{text:s.dataplaneOverview.name},{default:t(()=>[n(G,{to:{name:"data-plane-detail-view",params:{mesh:s.dataplaneOverview.mesh,dataPlane:s.dataplaneOverview.name}}},{default:t(()=>[a(p(s.dataplaneOverview.name),1)]),_:1},8,["to"])]),_:1},8,["text"])]),_:1}),a(),n(F,null,{title:t(()=>[a(p(_(r)("http.api.property.tags")),1)]),body:t(()=>[b.value.length>0?(e(),u(U,{key:0,tags:b.value},null,8,["tags"])):(e(),l(g,{key:1},[a(p(_(r)("common.detail.none")),1)],64))]),_:1}),a(),n(F,null,{title:t(()=>[a(p(_(r)("http.api.property.dependencies")),1)]),body:t(()=>[i.value!==null?(e(),u(U,{key:0,tags:i.value},null,8,["tags"])):(e(),l(g,{key:1},[a(p(_(r)("common.detail.none")),1)],64))]),_:1})])]),_:1}),a(),y("div",null,[y("h3",null,p(_(r)("data-planes.detail.mtls")),1),a(),k.value===null?(e(),u(_($e),{key:0,class:"mt-4",appearance:"danger"},{alertMessage:t(()=>[a(p(_(r)("data-planes.detail.no_mtls"))+` —
              `,1),y("a",{href:_(r)("data-planes.href.docs.mutual-tls"),class:"external-link",target:"_blank"},p(_(r)("data-planes.detail.no_mtls_learn_more",{product:_(r)("common.product.name")})),9,Et)]),_:1})):(e(),u(_(j),{key:1,class:"mt-4"},{body:t(()=>[y("div",Lt,[n(F,null,{title:t(()=>[a(p(_(r)("http.api.property.certificateExpirationTime")),1)]),body:t(()=>[a(p(k.value.certificateExpirationTime),1)]),_:1}),a(),n(F,null,{title:t(()=>[a(p(_(r)("http.api.property.lastCertificateRegeneration")),1)]),body:t(()=>[a(p(k.value.lastCertificateRegeneration),1)]),_:1}),a(),n(F,null,{title:t(()=>[a(p(_(r)("http.api.property.certificateRegenerations")),1)]),body:t(()=>[a(p(k.value.certificateRegenerations),1)]),_:1})])]),_:1}))]),a(),y("div",null,[y("h3",null,p(_(r)("data-planes.detail.configuration")),1),a(),n(Ae,{id:"code-block-data-plane",class:"mt-4",resource:s.dataplaneOverview,"resource-fetcher":J,"is-searchable":""},null,8,["resource"])])])]),insights:t(()=>[n(_(j),null,{body:t(()=>[n(Tt,{"is-empty":S.value.length===0},{default:t(()=>[n(X,{"initially-open":0},{default:t(()=>[(e(!0),l(g,null,R(S.value,(D,o)=>(e(),u(V,{key:o},{"accordion-header":t(()=>[n(Te,{subscription:D},null,8,["subscription"])]),"accordion-content":t(()=>[n(Oe,{subscription:D,"is-discovery-subscription":""},null,8,["subscription"])]),_:2},1024))),128))]),_:1})]),_:1},8,["is-empty"])]),_:1})]),"dpp-policies":t(()=>[n(_(j),null,{body:t(()=>[n(ue,{src:"/*/policy-types"},{default:t(({data:D,error:o})=>[o?(e(),u(te,{key:0,error:o},null,8,["error"])):D===void 0?(e(),u(ee,{key:1})):D.policies.length===0?(e(),u(ae,{key:2})):(e(),u(wt,{key:3,"dataplane-overview":v.dataplaneOverview,"policy-types":D.policies},null,8,["dataplane-overview","policy-types"]))]),_:1})]),_:1})]),"xds-configuration":t(()=>[n(_(j),null,{body:t(()=>[n(ne,{src:`/meshes/${s.dataplaneOverview.mesh}/dataplanes/${s.dataplaneOverview.name}/data-path/xds`,"query-key":"envoy-data-xds-data-plane"},null,8,["src"])]),_:1})]),"envoy-stats":t(()=>[n(_(j),null,{body:t(()=>[n(ne,{src:`/meshes/${s.dataplaneOverview.mesh}/dataplanes/${s.dataplaneOverview.name}/data-path/stats`,"query-key":"envoy-data-stats-data-plane"},null,8,["src"])]),_:1})]),"envoy-clusters":t(()=>[n(_(j),null,{body:t(()=>[n(ne,{src:`/meshes/${s.dataplaneOverview.mesh}/dataplanes/${s.dataplaneOverview.name}/data-path/clusters`,"query-key":"envoy-data-clusters-data-plane"},null,8,["src"])]),_:1})]),_:1})}}});const St=Y(At,[["__scopeId","data-v-7aa69179"]]),Ut=q({__name:"DataPlaneDetailView",props:{isGatewayView:{type:Boolean,required:!1,default:!1}},setup(v){const s=v,{t:r}=pe();return(E,O)=>(e(),u(Le,{name:"data-plane-detail-view","data-testid":"data-plane-detail-view"},{default:t(({route:f})=>[n(Ee,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:f.params.mesh}},text:f.params.mesh},{to:{name:`${s.isGatewayView?"gateways":"data-planes"}-list-view`,params:{mesh:f.params.mesh}},text:_(r)(`${s.isGatewayView?"gateways":"data-planes"}.routes.item.breadcrumbs`)}]},{title:t(()=>[y("h1",null,[n(je,{title:_(r)(`${s.isGatewayView?"gateways":"data-planes"}.routes.item.title`,{name:f.params.dataPlane}),render:!0},null,8,["title"])])]),default:t(()=>[a(),n(ue,{src:`/meshes/${f.params.mesh}/dataplane-overviews/${f.params.dataPlane}`},{default:t(({data:w,isLoading:m,error:b})=>[m?(e(),u(ee,{key:0})):b?(e(),u(te,{key:1,error:b},null,8,["error"])):w===void 0?(e(),u(ae,{key:2})):(e(),u(St,{key:3,"dataplane-overview":w,"data-testid":"detail-view-details"},null,8,["dataplane-overview"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{Ut as default};
