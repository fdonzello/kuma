import{P as f,z as _}from"./production-c33f040b.js";import{f as b}from"./kongponents.es-c2485d1e.js";import{a as y,O as h}from"./OnboardingNavigation-0c346547.js";import{O as v}from"./OnboardingPage-fe05b34b.js";import{f as x,g as G,h as O}from"./index-ffb7fa8b.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{i as s,a as u,w as e,o as d,e as a,f as o,g as l,y as P}from"./runtime-dom.esm-bundler-32659b48.js";import"./store-96085224.js";import"./index-7ce7c993.js";import"./DoughnutChart-323eb437.js";import"./vue-router-d8e03a07.js";const w={name:"ConfigurationTypes",components:{KubernetesGraph:x(),PostgresGraph:G(),MemoryGraph:O(),OnboardingNavigation:y,OnboardingHeading:h,OnboardingPage:v,KRadio:b},data(){return{mode:"kubernetes",productName:f}},computed:{..._({multicluster:"config/getMulticlusterStatus",configurationType:"config/getConfigurationType"}),nextStep(){return this.multicluster?"onboarding-multi-zone":"onboarding-create-mesh"},currentGraph(){switch(this.mode){case"kubernetes":return"KubernetesGraph";case"postgres":return"PostgresGraph";case"memory":return"MemoryGraph";default:return"KubernetesGraph"}}},mounted(){this.mode=this.configurationType}},C={class:"h-full w-full flex items-center justify-center mb-10"},K={class:"radio flex text-base justify-between w-full sm:w-3/4 md:w-3/5 lg:w-1/2 absolute bottom-0 right-0 left-0 mb-10 mx-auto configuration-type-radio-buttons"};function N(T,t,M,k,n,m){const p=s("OnboardingHeading"),i=s("KRadio"),g=s("OnboardingNavigation"),c=s("OnboardingPage");return d(),u(c,{"with-image":""},{header:e(()=>[a(p,null,{title:e(()=>[o(`
          Learn about configuration storage
        `)]),_:1})]),content:e(()=>[l("div",C,[(d(),u(P(m.currentGraph)))]),o(),l("div",K,[a(i,{modelValue:n.mode,"onUpdate:modelValue":t[0]||(t[0]=r=>n.mode=r),name:"deployment","selected-value":"kubernetes"},{default:e(()=>[o(`
          Kubernetes
        `)]),_:1},8,["modelValue"]),o(),a(i,{modelValue:n.mode,"onUpdate:modelValue":t[1]||(t[1]=r=>n.mode=r),name:"deployment","selected-value":"postgres"},{default:e(()=>[o(`
          Postgres
        `)]),_:1},8,["modelValue"]),o(),a(i,{modelValue:n.mode,"onUpdate:modelValue":t[2]||(t[2]=r=>n.mode=r),name:"deployment","selected-value":"memory"},{default:e(()=>[o(`
          Memory
        `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[a(g,{"next-step":m.nextStep,"previous-step":"onboarding-deployment-types"},null,8,["next-step"])]),_:1})}const L=V(w,[["render",N],["__scopeId","data-v-53baee2d"]]);export{L as default};
