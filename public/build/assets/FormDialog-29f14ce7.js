import{d as w,a3 as B,a4 as b,_ as v,e as t,f as a,h as u,w as o,i as n,q as N,t as _,b as l,j as V,c as F,K as S,I,s as $,v as x}from"./app-a4b3de18.js";const D=w({components:{CircleCloseFilled:B,Pointer:b},model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!0},isEdit:{type:Boolean,default:!1},isNext:{type:Boolean,default:!1},title:{type:String,required:!0},busy:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1}},setup(e,{emit:s}){const d=()=>{s("update:show",!1)};return{props:e,close:d,add:()=>{s("add",!0)},next:()=>{s("next",!0)},handleClose:c=>{c(),d()}}}}),E=e=>($("data-v-22d1cf3e"),e=e(),x(),e),j={class:"my-header",style:{display:"flex","justify-content":"space-between"}},q=["id"],z={key:0,class:"dialog-footer"},A=E(()=>n("span",null,"Next",-1));function K(e,s,d,m,y,C){const c=t("CircleCloseFilled"),p=t("el-icon"),r=t("el-button"),f=t("pointer"),h=t("el-dialog");return a(),u(h,{modelValue:e.props.show,"onUpdate:modelValue":s[0]||(s[0]=i=>e.props.show=i),"before-close":e.handleClose,"show-close":!1},{header:o(({close:i,titleId:k,titleClass:g})=>[n("div",j,[n("h4",{id:k,class:N(g)},_(e.title),11,q),l(r,{type:"danger",size:"small",onClick:i},{default:o(()=>[l(p,{class:"el-icon--left"},{default:o(()=>[l(c)]),_:1}),V(" Close ")]),_:2},1032,["onClick"])])]),footer:o(()=>[e.busy?S("",!0):(a(),F("span",z,[e.props.isNext?(a(),u(r,{key:0,type:"primary",onClick:e.next},{default:o(()=>[l(p,null,{default:o(()=>[l(f)]),_:1}),A]),_:1},8,["onClick"])):(a(),u(r,{key:1,type:"primary",onClick:e.add},{default:o(()=>[l(p,null,{default:o(()=>[l(f)]),_:1}),n("span",null,_(e.props.isEdit?"Replace":"Add"),1)]),_:1},8,["onClick"]))]))]),default:o(()=>[I(e.$slots,"default",{},void 0,!0)]),_:3},8,["modelValue","before-close"])}const R=v(D,[["render",K],["__scopeId","data-v-22d1cf3e"]]);export{R as F};
