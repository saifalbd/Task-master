import{A as g,_ as w}from"./PageTitleBox-9be017fa.js";import{S as v}from"./index-7ea306df.js";import{S as x}from"./statusBtn-bf1e4598.js";import{_ as B,r as b,m as T,M as C,g as L,h as m,i,o as c,a as s,j as k,c as h,b as l,t as u,F as N,k as V,q as A}from"./app-fb8c1635.js";import{u as F}from"./index-6f6f3ed4.js";import"./moment-fbc5633a.js";import"./icon-7c2f508c.js";import"./index-3437df1a.js";const q={props:{id:{type:[String,Number],required:!0}},components:{AppLayout:g,PageTitleBox:w,ShowTask:v,StatusBtn:x},setup(n){const r=b(null),d=b(!0),p=T().auth_id,{init:y}=F();(async()=>{try{const a=route("my.task.show",{task:n.id}),{data:o}=await axios.get(a);r.value=o}catch(a){console.error(a)}d.value=!1})();const _=async a=>{try{const o=route("task.changeStatus",{task:n.id}),{data:e}=await axios.post(o,{status:a});r.value.status=a,y({message:"Succsess Fully Update Status",color:"#432c50",closeable:!0,duration:4e3})}catch(o){console.error(o)}};return{busy:d,auth_id:p,id:n.id,task:r,changeStatus:_,statusList:C}}},D={key:0},E={class:"status-dropdown"},j=["onClick"];function M(n,r,d,t,p,y){const f=i("page-title-box"),_=i("status-btn"),a=i("show-task"),o=i("app-layout");return c(),L(o,{busy:t.busy},{default:m(()=>[s("div",null,[k(f,{title:"Show Task"})]),t.task?(c(),h("div",D,[k(a,{auth_id:t.auth_id,id:t.id,task:t.task},{default:m(()=>[s("div",null,[s("h1",null,[l(" Employe: "),s("b",null,u(t.task.assigner.name),1)]),s("div",null,[l(" Task Assin: "),s("b",null,u(t.task.start),1)]),s("div",null,[l(" DeadLine: "),s("b",null,u(t.task.end),1)]),s("div",null,[l(" Status: "),k(_,{dropdown:!0,status:t.task.status},{default:m(()=>[s("ul",E,[(c(!0),h(N,null,V(t.statusList.filter(e=>e.status!=t.task.status),(e,S)=>(c(),h("li",{key:S,onClick:P=>t.changeStatus(e.status)},u(e.title),9,j))),128))])]),_:1},8,["status"])])])]),_:1},8,["auth_id","id","task"])])):A("",!0)]),_:1},8,["busy"])}const Q=B(q,[["render",M]]);export{Q as default};