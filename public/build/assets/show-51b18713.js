import{S as D,a as E}from"./app-layout-5035e93c.js";import{_ as U}from"./PageTitleBox-2c2a24fa.js";import{_ as V,r as c,f as x,h as C,w as i,b as a,i as t,e as n,d as B,j as T,x as L,y as M,c as j,F as N,q,v as k,m as H,ad as z,L as P}from"./app-6441ea8f.js";import{S as F}from"./index-bb6c09fd.js";import{C as I}from"./CreateButton-55d26947.js";import{F as R}from"./FormDialog-52448d67.js";import{r as Q}from"./index-d2820a07.js";import{h as A}from"./moment-fbc5633a.js";import{R as Y}from"./RemoveEditButton-0508b1ca.js";import"./icon-7c2f508c.js";import"./index-abf7aad4.js";import"./useToast-31be6915.js";const O={components:{FormDialog:R},props:{show:{type:Boolean,default:!1},project_id:{type:Number,required:!0},members:{type:Array,required:!0},categories:{type:Array,required:!0}},setup(l,{emit:o}){let y=c(!1);const e=c(null);let h=c(""),b=c(null),u=c([]);const p=c(A().format(dateFormat)),m=c(null),d=c(""),_=c([]);return{props:l,form:e,emit:o,save:async()=>{let r=route("project.task.store",{project:l.project_id});await e.value.validate();try{const s=new FormData;s.append("title",h.value),s.append("category",b.value),u.value.forEach((w,g)=>{s.append(`employees[${g}]`,w.id)}),s.append("start",p.value),s.append("end",m.value),s.append("description",d.value),_.value.forEach((w,g)=>{s.append(`attachments[${g}]`,w)});const{data:v}=await axios.post(r,s);o("push",addProtos(v,{showModel:!1,showEdit:!1}))}catch(s){console.error(s),validErorrs(s)}},rs:Q,busy:y,title:h,start:p,end:m,employees:u,category:b,description:d,attachments:_}}},G={class:"layout gutter--md"},J={class:"row align-content--center"},K={class:"flex xs12 in-box"},W={class:"flex xs12 in-box"},X={class:"flex xs12 in-box"},Z={class:"flex xs6 in-box"},$={class:"flex xs6 in-box"},ee={class:"flex xs12 in-box"},te={class:"flex xs12",style:{"min-height":"150px","margin-bottom":"50px"}};function oe(l,o,y,e,h,b){const u=n("va-input"),p=n("va-select"),m=n("va-file-upload"),d=n("QuillEditor"),_=n("va-form"),f=n("form-dialog");return x(),C(f,{show:e.props.show,"onUpdate:show":o[7]||(o[7]=r=>e.emit("update:show",r)),busy:e.busy,title:"Create Task",onAdd:e.save,fullscreen:!0},{default:i(()=>[a(_,{ref:"form"},{default:i(()=>[t("div",G,[t("div",J,[t("div",K,[a(u,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=r=>e.title=r),label:"Title *",placeholder:"Title Here",rules:e.rs("title",!0)},null,8,["modelValue","rules"])]),t("div",W,[a(p,{modelValue:e.category,"onUpdate:modelValue":o[1]||(o[1]=r=>e.category=r),label:"Project Category *",placeholder:"Category Here",rules:e.rs("Category",!0),"text-by":"title","value-by":"id",options:e.props.categories},null,8,["modelValue","rules","options"])]),t("div",X,[a(p,{modelValue:e.employees,"onUpdate:modelValue":o[2]||(o[2]=r=>e.employees=r),label:"Task Employee *",placeholder:"Task Employee Here",rules:e.rs("member",!0),searchable:"",multiple:"","text-by":"name",options:e.props.members},null,8,["modelValue","rules","options"])]),t("div",Z,[a(u,{modelValue:e.start,"onUpdate:modelValue":o[3]||(o[3]=r=>e.start=r),label:"Start *",type:"date",placeholder:"Start Here",rules:e.rs("start",!0)},null,8,["modelValue","rules"])]),t("div",$,[a(u,{modelValue:e.end,"onUpdate:modelValue":o[4]||(o[4]=r=>e.end=r),type:"date",label:"Dead Line *",placeholder:"Dead Line Here",rules:e.rs("dead line",!0)},null,8,["modelValue","rules"])]),t("div",ee,[a(m,{modelValue:e.attachments,"onUpdate:modelValue":o[5]||(o[5]=r=>e.attachments=r),dropzone:""},null,8,["modelValue"])]),t("div",te,[a(d,{theme:"snow",toolbar:"minimal",contentType:"html",content:e.description,"onUpdate:content":o[6]||(o[6]=r=>e.description=r),placeholder:"Description Html Contant"},null,8,["content"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const se=V(O,[["render",oe]]);const ae=B({model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!0},task:{type:Object,required:!0}},setup(l,{emit:o}){return{props:l,close:()=>{o("update:show",!1)}}}}),le=l=>(L("data-v-95937cf5"),l=l(),M(),l),ne={class:"layout va-gutter-1"},re={class:"row"},de=le(()=>t("div",{class:"flex xs12"},[t("div",{class:"item mb-4"},[t("div",{class:"form-title"},[t("span",{class:"text"},"Show Task")])])],-1)),ie={class:"flex xs12"},ce=["innerHTML"],ue={class:"flex xs12"},pe={class:"item actions-btns"};function me(l,o,y,e,h,b){const u=n("va-icon"),p=n("va-button"),m=n("va-modal");return x(),C(m,{modelValue:l.props.show,"onUpdate:modelValue":o[0]||(o[0]=d=>l.props.show=d),fullscreen:!1,"hide-default-actions":"","no-outside-dismiss":"",class:"form-sceen"},{default:i(()=>[t("div",ne,[t("div",re,[de,t("div",ie,[t("div",{class:"item",innerHTML:l.task.description},null,8,ce)]),t("div",ue,[t("div",pe,[a(p,{color:"danger",size:"small",onClick:l.close},{default:i(()=>[a(u,{class:"material-icons"},{default:i(()=>[T("close")]),_:1}),T(" Close")]),_:1},8,["onClick"])])])])])]),_:1},8,["modelValue"])}const _e=V(ae,[["render",me],["__scopeId","data-v-95937cf5"]]),fe={components:{StatusBtn:D,RemoveEditButton:Y,Taskmodel:_e},props:{project_id:{type:Number,required:!0},tasks:{type:Array,required:!0}},setup(l){return{props:l}}},he={class:"va-table-responsive"},ve={class:"va-table"},be=t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Employees"),t("th",null,"AssignAt"),t("th",null,"DeadLine"),t("th",null,"Status"),t("th",null,"action")])],-1);function ye(l,o,y,e,h,b){const u=n("status-btn"),p=n("taskmodel"),m=n("remove-edit-button");return x(),j("div",he,[t("table",ve,[be,t("tbody",null,[(x(!0),j(N,null,q(e.props.tasks,(d,_)=>(x(),j("tr",{key:_},[t("td",null,k(d.title),1),t("td",null,k(d.employees.map(f=>f.name).join(",")),1),t("td",null,k(d.start),1),t("td",null,k(d.end),1),t("td",null,[a(u,{status:d.status,size:"small"},null,8,["status"])]),t("td",null,[a(m,{isView:!0,isEdit:!1,onViewClick:f=>d.showModel=!0,onRemoveClick:o[0]||(o[0]=f=>l.remove(l.rowData,l.rowIndex))},{default:i(()=>[a(p,{show:d.showModel,"onUpdate:show":f=>d.showModel=f,task:d},null,8,["show","onUpdate:show","task"])]),_:2},1032,["onViewClick"])])]))),128))])])])}const we=V(fe,[["render",ye]]),ke={props:{id:{type:[String,Number],required:!0}},components:{AppLayout:E,PageTitleBox:U,ShowProject:F,StatusBtn:D,CreateButton:I,AddTask:se,TaskList:we},setup(l){const o=H(),y=c(parseInt(o.auth_id)),e=c(null),h=c(!0),b=c(!1),u=c([]),p=c([]),m=c([]);(async()=>{h.value=!0;try{const s=route("project.show",{project:l.id}),{data:v}=await axios.get(s);e.value=v}catch(s){console.error(s)}h.value=!1})(),axios.get(route("project.members",{project:l.id})).then(({data:s})=>u.value=s.map(v=>({id:v.id,name:v.model.name}))),z("categories",s=>{p.value=s});const _=s=>{m.value.push(s),b.value=!1};(async()=>{try{const s=route("project.task.index",{project:l.id}),{data:v}=await axios.get(s);m.value=v.map(w=>(w.showModel=!1,w))}catch(s){console.error(s)}})();const r=s=>A(s).format("DD MMM YY");return{showCreateTask:b,busy:h,id:l.id,project:e,auth_id:y,members:u,categories:p,push:_,tasks:m,atNow:r}}},xe={key:0},ge={style:{"font-size":"15px","margin-left":"5px"}};function je(l,o,y,e,h,b){const u=n("page-title-box"),p=n("task-list"),m=n("el-avatar"),d=n("el-link"),_=n("el-descriptions-item"),f=n("status-btn"),r=n("el-descriptions"),s=n("create-button"),v=n("add-task"),w=n("show-project"),g=n("app-layout");return x(),C(g,{busy:e.busy},{default:i(()=>[t("div",null,[a(u,{title:"Project"})]),e.project?(x(),j("div",xe,[a(w,{auth_id:e.auth_id,id:e.id,project:e.project},{tasks:i(()=>[a(p,{tasks:e.tasks,project_id:e.project.id},null,8,["tasks","project_id"])]),default:i(()=>[t("div",null,[a(r,{direction:"horizontal",column:1,size:"large",border:""},{default:i(()=>[a(_,{label:"Assigner:"},{default:i(()=>[a(d,null,{default:i(()=>[a(m,{size:25,src:e.project.assigner.avatar.url},null,8,["src"]),t("b",ge,k(e.project.assigner.name),1)]),_:1})]),_:1}),a(_,{label:"Team:"},{default:i(()=>[T(k(e.project.team.title),1)]),_:1}),a(_,{label:"Status:"},{default:i(()=>[a(f,{status:e.project.status},null,8,["status"])]),_:1}),a(_,{label:"Asigned Date:"},{default:i(()=>[t("b",null,k(e.atNow(e.project.start)),1)]),_:1}),a(_,{label:"DeadLine Date:"},{default:i(()=>[t("b",null,k(e.atNow(e.project.end)),1)]),_:1})]),_:1}),t("div",null,[a(s,{title:"Add Task",onClick:o[0]||(o[0]=S=>e.showCreateTask=!0)})]),a(v,{show:e.showCreateTask,"onUpdate:show":o[1]||(o[1]=S=>e.showCreateTask=S),members:e.members,categories:e.categories,project_id:e.project.id,onPush:e.push},null,8,["show","members","categories","project_id","onPush"])])]),_:1},8,["auth_id","id","project"])])):P("",!0)]),_:1},8,["busy"])}const qe=V(ke,[["render",je]]);export{qe as default};
