import{a as x}from"./app-layout-4368b8fd.js";import{_ as g}from"./PageTitleBox-624ea85e.js";import{S as v}from"./index-0dd7e8b6.js";import{S}from"./statusBtn-f4137a6f.js";import{B as D}from"./BackButton-4645f5cd.js";import{_ as N,m as V,r as p,ak as z,h as C,w as a,e,f as k,i as l,b as o,c as L,t as _,G as M}from"./app-15ad5095.js";import{h as T}from"./moment-fbc5633a.js";import"./FormDialog-9f17f8d5.js";import"./index-e21665d8.js";import"./icon-7c2f508c.js";import"./index-3d5b99d0.js";import"./useToast-453dba0d.js";const A={props:{id:{type:[String,Number],required:!0}},components:{AppLayout:x,PageTitleBox:g,ShowTask:v,StatusBtn:S,BackButton:D},setup(i){const m=V().auth_id,t=p(null),n=p(!0),u=s=>T(s).format("DD MMM YY");return(async()=>{n.value=!0;try{const s=route("task.show",{task:i.id}),{data:c}=await axios.get(s);t.value=c}catch(s){console.error(s)}n.value=!1})(),{busy:n,auth_id:m,id:i.id,task:t,useDateFormat:z,atNow:u}}},E={key:0},Y={style:{"font-size":"15px","margin-left":"5px"}};function j(i,f,m,t,n,u){const d=e("back-button"),s=e("page-title-box"),c=e("el-avatar"),b=e("el-link"),r=e("el-descriptions-item"),h=e("status-btn"),y=e("el-descriptions"),w=e("show-task"),B=e("app-layout");return k(),C(B,{busy:t.busy},{default:a(()=>[l("div",null,[o(s,{title:"Show Task no job"},{default:a(()=>[o(d)]),_:1})]),t.task?(k(),L("div",E,[o(w,{auth_id:t.auth_id,id:t.id,task:t.task},{default:a(()=>[o(y,{direction:"horizontal",column:1,size:"large",border:""},{default:a(()=>[o(r,{label:"Employe:"},{default:a(()=>[o(b,null,{default:a(()=>[o(c,{size:25,src:t.task.employee.model.avatar.url},null,8,["src"]),l("b",Y,_(t.task.employee.model.name),1)]),_:1})]),_:1}),o(r,{label:"Status:"},{default:a(()=>[o(h,{status:t.task.status},null,8,["status"])]),_:1}),o(r,{label:"Asigned Date:"},{default:a(()=>[l("b",null,_(t.atNow(t.task.start)),1)]),_:1}),o(r,{label:"DeadLine Date:"},{default:a(()=>[l("b",null,_(t.atNow(t.task.end)),1)]),_:1})]),_:1})]),_:1},8,["auth_id","id","task"])])):M("",!0)]),_:1},8,["busy"])}const W=N(A,[["render",j]]);export{W as default};
