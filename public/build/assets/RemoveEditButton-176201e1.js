import{_,f as o,c as f,b as s,w as i,h as r,E as m,L as v,e as u}from"./app-aa4a02c0.js";const k={props:{isView:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!0},isDelete:{type:Boolean,default:!0}},setup(l,{emit:e}){return{emit:e,props:l}}},y={class:"flex-right"};function C(l,e,d,t,z,B){const n=u("va-icon"),a=u("va-button"),p=u("va-button-group");return o(),f("div",y,[s(p,{size:"small",outline:""},{default:i(()=>[t.props.isView?(o(),r(a,{key:0,preset:"primary",size:"small",onClick:e[0]||(e[0]=c=>t.emit("viewClick",!0))},{default:i(()=>[s(n,{size:"small",name:"visibility"})]),_:1})):m("",!0),d.isEdit?(o(),r(a,{key:1,preset:"primary",size:"small",onClick:e[1]||(e[1]=c=>t.emit("editClick",!0))},{default:i(()=>[s(n,{size:"small",name:"edit"})]),_:1})):m("",!0),d.isDelete?(o(),r(a,{key:2,preset:"primary",size:"small"},{default:i(()=>[s(n,{size:"small",name:"delete",color:"#ed6c02",onClick:e[2]||(e[2]=c=>t.emit("removeClick",!0))})]),_:1})):m("",!0)]),_:1}),v(l.$slots,"default")])}const w=_(k,[["render",C]]);export{w as R};
