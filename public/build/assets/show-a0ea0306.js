import{a as B,S as v}from"./app-layout-ddd4ecde.js";import{_ as F}from"./PageTitleBox-3291f9d9.js";import{S as L}from"./index-50005b25.js";import{_ as M,r as y,m as C,I as V,ak as z,h as N,w as s,e,f as _,i as c,b as a,c as k,t as d,F as T,p as Y,J as A}from"./app-15300521.js";import{B as q}from"./BackButton-86c0013f.js";import{u as E}from"./useToast-c3bf6ae8.js";import"./FormDialog-0d177dd5.js";import"./index-810449cf.js";import"./moment-fbc5633a.js";import"./icon-7c2f508c.js";import"./index-3f9f24ef.js";const I={props:{id:{type:[String,Number],required:!0}},components:{AppLayout:B,PageTitleBox:F,ShowTask:L,StatusBtn:v,BackButton:q},setup(l){const u=y(null),m=y(!0),f=C().auth_id,{init:h}=E();(async()=>{try{const o=route("my.task.show",{task:l.id}),{data:n}=await axios.get(o);u.value=n}catch(o){console.error(o)}m.value=!1})();const p=async o=>{try{const n=route("task.changeStatus",{task:l.id}),{data:i}=await axios.post(n,{status:o,notify:1});u.value.status=o,h({message:"Succsess Fully Update Status",color:"#432c50",closeable:!0,duration:4e3})}catch(n){console.error(n)}};return{busy:m,auth_id:f,id:l.id,task:u,changeStatus:p,statusList:V,useDateFormat:z}}},J={key:0},P={style:{"font-size":"15px","margin-left":"5px"}},U={class:"status-dropdown"},j=["onClick"];function G(l,u,m,t,f,h){const b=e("back-button"),p=e("page-title-box"),o=e("el-avatar"),n=e("el-link"),i=e("el-descriptions-item"),g=e("status-btn"),w=e("el-descriptions"),S=e("show-task"),D=e("app-layout");return _(),N(D,{busy:t.busy},{default:s(()=>[c("div",null,[a(p,{title:"Show Task"},{default:s(()=>[a(b)]),_:1})]),t.task?(_(),k("div",J,[a(S,{auth_id:t.auth_id,id:t.id,task:t.task},{default:s(()=>[a(w,{direction:"horizontal",column:1,size:"large",border:""},{default:s(()=>[a(i,{label:"Assigner:"},{default:s(()=>[a(n,null,{default:s(()=>[a(o,{size:25,src:t.task.assigner.avatar.url},null,8,["src"]),c("b",P,d(t.task.assigner.name),1)]),_:1})]),_:1}),a(i,{label:"Status:"},{default:s(()=>[a(g,{dropdown:!0,status:t.task.status},{default:s(()=>[c("ul",U,[(_(!0),k(T,null,Y(t.statusList.filter(r=>r.status!=t.task.status).filter(r=>r.status!=4),(r,x)=>(_(),k("li",{key:x,onClick:H=>t.changeStatus(r.status)},d(r.title),9,j))),128))])]),_:1},8,["status"])]),_:1}),a(i,{label:"Asigned Date:"},{default:s(()=>[c("b",null,d(t.useDateFormat(new Date(t.task.start),"DD MMM YY")),1)]),_:1}),a(i,{label:"DeadLine Date:"},{default:s(()=>[c("b",null,d(t.useDateFormat(new Date(t.task.end),"DD MMM YY")),1)]),_:1})]),_:1})]),_:1},8,["auth_id","id","task"])])):A("",!0)]),_:1},8,["busy"])}const et=M(I,[["render",G]]);export{et as default};
