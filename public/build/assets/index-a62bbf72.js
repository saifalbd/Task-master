import{a as ee}from"./app-layout-fab3e0f7.js";import{_ as te}from"./PageTitleBox-1a575d62.js";import{P as oe}from"./Pagination-32330b36.js";import{R as le}from"./RemoveEditButton-176201e1.js";import{F as O}from"./FormDialog-169ddb1e.js";import{r as R,u as ae}from"./index-5d514e9b.js";import{h as W}from"./moment-fbc5633a.js";import{_ as D,r,f as k,h as U,w as n,b as l,i,j as H,t as A,e as a,M as ne,Y as se,Z as re,V as ie,W as de,$ as ce,v as ue,a0 as F,u as me,O as pe,P as _e,c as L,n as S,F as z}from"./app-aa4a02c0.js";import{C as fe}from"./CreateButton-16b34c49.js";import{S as ye}from"./statusBtn-c3bfe445.js";const ve={components:{FormDialog:O},props:{show:{type:Boolean,default:!1},employees:{type:Array,required:!0},categories:{type:Array,required:!0}},setup(g,{emit:t}){let w=r(!1);const e=r(null);let y=r(""),b=r(null),u=r(null);const p=r(W().format(dateFormat)),_=r(null),f=r(""),m=r([]);return{props:g,form:e,emit:t,save:async()=>{var P;let x=route("task.store");if(!await e.value.validate())return null;try{const d=new FormData;d.append("title",y.value),d.append("category",b.value),d.append("employee",(P=u.value)==null?void 0:P.id),d.append("start",p.value),d.append("end",_.value),d.append("description",f.value),m.value.forEach((c,v)=>{d.append(`attachments[${v}]`,c)});const{data:T}=await axios.post(x,d);t("push",addProtos(T,{action:!0,showEdit:!1}))}catch(d){console.error(d),validErorrs(d)}},rs:R,busy:w,title:y,start:p,end:_,employee:u,category:b,description:f,attachments:m}}},be={class:"layout gutter--md"},he={class:"row align-content--center"},ge={class:"flex xs12 in-box"},xe={class:"flex xs12 in-box"},ke={class:"flex xs12 in-box"},we={class:"flex xs6 in-box"},Ve={class:"flex xs6 in-box"},Ce={class:"flex xs12 in-box"},Ee={class:"flex xs12",style:{"min-height":"150px","margin-bottom":"50px"}};function Te(g,t,w,e,y,b){const u=a("va-input"),p=a("va-select"),_=a("va-chip"),f=a("va-file-upload"),m=a("QuillEditor"),h=a("va-form"),x=a("form-dialog");return k(),U(x,{show:e.props.show,"onUpdate:show":t[7]||(t[7]=o=>e.emit("update:show",o)),busy:e.busy,title:"Create Task",onAdd:e.save,fullscreen:!0},{default:n(()=>[l(h,{ref:"form"},{default:n(()=>[i("div",be,[i("div",he,[i("div",ge,[l(u,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=o=>e.title=o),label:"Title *",placeholder:"Title Here",rules:e.rs("title",!0)},null,8,["modelValue","rules"])]),i("div",xe,[l(p,{modelValue:e.category,"onUpdate:modelValue":t[1]||(t[1]=o=>e.category=o),label:"Project Category *",placeholder:"Category Here",rules:e.rs("Category",!0),"text-by":"title","value-by":"id",options:e.props.categories},null,8,["modelValue","rules","options"])]),i("div",ke,[l(p,{modelValue:e.employee,"onUpdate:modelValue":t[2]||(t[2]=o=>e.employee=o),label:"Task Employee *",placeholder:"Task Employee Here",rules:e.rs("member",!0),searchable:"","text-by":"name",options:e.props.employees},{content:n(({value:o})=>[l(_,{size:"small",class:"mr-1 my-1"},{default:n(()=>[H(A(o.name),1)]),_:2},1024)]),_:1},8,["modelValue","rules","options"])]),i("div",we,[l(u,{modelValue:e.start,"onUpdate:modelValue":t[3]||(t[3]=o=>e.start=o),label:"Start *",type:"date",placeholder:"Start Here",rules:e.rs("start",!0)},null,8,["modelValue","rules"])]),i("div",Ve,[l(u,{modelValue:e.end,"onUpdate:modelValue":t[4]||(t[4]=o=>e.end=o),type:"date",label:"Dead Line *",placeholder:"Dead Line Here",rules:e.rs("dead line",!0)},null,8,["modelValue","rules"])]),i("div",Ce,[l(f,{modelValue:e.attachments,"onUpdate:modelValue":t[5]||(t[5]=o=>e.attachments=o),dropzone:""},null,8,["modelValue"])]),i("div",Ee,[l(m,{theme:"snow",toolbar:"minimal",contentType:"html",content:e.description,"onUpdate:content":t[6]||(t[6]=o=>e.description=o),placeholder:"Description Html Contant"},null,8,["content"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const Ue=D(ve,[["render",Te]]),Pe={components:{FormDialog:O},props:{show:{type:Boolean,default:!1},employees:{type:Array,required:!0},categories:{type:Array,required:!0},item:{type:Object,required:!0}},setup(g,{emit:t}){let w=r(null),e=r(!1);const y=r(null);let b=r(""),u=r(null),p=r(null);const _=r(W().format(dateFormat)),f=r(null),m=r(""),h=r([]);return ne(g.item,o=>{b.value=o.title,p.value=o.employee,u.value=o.category_id,_.value=o.start,f.value=o.end,m.value=o.description,w.value=o},{immediate:!0}),{props:g,form:y,emit:t,save:async()=>{var T;let o=route("task.update",{task:w.value.id});if(!await y.value.validate())return null;const d=new FormData;d.append("_method","PUT"),d.append("title",b.value),d.append("category",u.value),d.append("employee",(T=p.value)==null?void 0:T.id),d.append("start",_.value),d.append("end",f.value),d.append("description",m.value),h.value.forEach((c,v)=>{d.append(`attachments[${v}]`,c)});try{const{data:c}=await axios.post(o,d);t("replace",addProtos(c,{action:!0,showEdit:!1}))}catch(c){console.error(c),validErorrs(c)}},rs:R,busy:e,title:b,start:_,end:f,employee:p,category:u,description:m,attachments:h}}},Be={class:"layout gutter--md"},He={class:"row align-content--center"},Ae={class:"flex xs12 in-box"},Le={class:"flex xs12 in-box"},Se={class:"flex xs12 in-box"},ze={class:"flex xs6 in-box"},De={class:"flex xs6 in-box"},Fe={class:"flex xs12 in-box"},Oe={class:"flex xs12",style:{"min-height":"150px","margin-bottom":"50px"}};function Re(g,t,w,e,y,b){const u=a("va-input"),p=a("va-select"),_=a("va-chip"),f=a("va-file-upload"),m=a("QuillEditor"),h=a("va-form"),x=a("form-dialog");return k(),U(x,{show:e.props.show,"onUpdate:show":t[7]||(t[7]=o=>e.emit("update:show",o)),busy:e.busy,title:"Edit Task",onAdd:e.save,fullscreen:!0},{default:n(()=>[l(h,{ref:"form"},{default:n(()=>[i("div",Be,[i("div",He,[i("div",Ae,[l(u,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=o=>e.title=o),label:"Title *",placeholder:"Title Here",rules:e.rs("title",!0)},null,8,["modelValue","rules"])]),i("div",Le,[l(p,{modelValue:e.category,"onUpdate:modelValue":t[1]||(t[1]=o=>e.category=o),label:"Project Category *",placeholder:"Category Here",rules:e.rs("Category",!0),"text-by":"title","value-by":"id",options:e.props.categories},null,8,["modelValue","rules","options"])]),i("div",Se,[l(p,{modelValue:e.employee,"onUpdate:modelValue":t[2]||(t[2]=o=>e.employee=o),label:"Task Employee *",placeholder:"Task Employee Here",rules:e.rs("member",!0),searchable:"","text-by":"name",options:e.props.employees},{content:n(({value:o})=>[l(_,{size:"small",class:"mr-1 my-1"},{default:n(()=>[H(A(o.name),1)]),_:2},1024)]),_:1},8,["modelValue","rules","options"])]),i("div",ze,[l(u,{modelValue:e.start,"onUpdate:modelValue":t[3]||(t[3]=o=>e.start=o),label:"Start *",type:"date",placeholder:"Start Here",rules:e.rs("start",!0)},null,8,["modelValue","rules"])]),i("div",De,[l(u,{modelValue:e.end,"onUpdate:modelValue":t[4]||(t[4]=o=>e.end=o),type:"date",label:"Dead Line *",placeholder:"Dead Line Here",rules:e.rs("dead line",!0)},null,8,["modelValue","rules"])]),i("div",Fe,[l(f,{modelValue:e.attachments,"onUpdate:modelValue":t[5]||(t[5]=o=>e.attachments=o),dropzone:""},null,8,["modelValue"])]),i("div",Oe,[l(m,{theme:"snow",toolbar:"minimal",contentType:"html",content:e.description,"onUpdate:content":t[6]||(t[6]=o=>e.description=o),placeholder:"Description Html Contant"},null,8,["content"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const We=D(Pe,[["render",Re]]);const qe={components:{AppLayout:ee,PageTitleBox:te,Pagination:oe,Create:Ue,Edit:We,List:se,Box:re,CreateButton:fe,RemoveEditButton:le,StatusBtn:ye,Delete:ie,More:de,Search:ce,Collection:ue},setup(){const g=r(!0),t=r(!0),w=ae(),e=me(),y=r([]),b=r([]),u=r([]),p=r(!1),_=r([]),f=r(10),m=r("title"),h=[{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"category.title",label:"Category",sortable:!0},{key:"employee.name",label:"Employee",sortable:!0},{key:"start",label:"Start",sortable:!0},{key:"end",label:"Dead Line",sortable:!0},{key:"status",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],x=r("asc");F("employees",c=>{b.value=c}),F("categories",c=>{u.value=c});const o=async c=>{try{const v=route("task.index",{perPage:f.value,page:c}),{data:V}=await axios.get(v);_.value=V.links,y.value=addProtos(V.data,{action:!0,showEdit:!1})}catch(v){console.error(v)}t.value=!1};return o(1),{busy:t,showCreate:p,perPage:f,sortingOrder:x,items:y,columns:h,sortBy:m,push:c=>{p.value=!1,y.value.push(c)},replace:(c,v)=>{p.value=!1,y.value.splice(v,1,c)},fetchItems:o,employees:b,categories:u,remove:async(c,v)=>{if(!await pe(c,"Task","title"))return null;try{const B=route("task.destroy",{task:c.id});await axios.delete(B),y.value.splice(v,1),_e(w)}catch(B){console.log(B)}},links:_,router:e,isCardWise:g}}},je={class:"filter-row mt-2"},Me={class:"left-side"},Qe={class:"item"},Ne={class:"right-side"},Ie={class:"item right mr-3"},Ye={class:"item right"},Ze=["innerHTML"];function Ge(g,t,w,e,y,b){const u=a("create-button"),p=a("page-title-box"),_=a("el-option"),f=a("collection"),m=a("el-icon"),h=a("el-select"),x=a("list"),o=a("el-button"),P=a("box"),d=a("el-button-group"),T=a("search"),c=a("el-input"),v=a("el-divider"),V=a("el-descriptions-item"),B=a("status-btn"),q=a("delete"),j=a("more"),M=a("el-descriptions"),Q=a("el-card"),N=a("el-col"),I=a("el-row"),Y=a("va-chip"),Z=a("edit"),G=a("remove-edit-button"),J=a("va-data-table"),K=a("pagination"),X=a("create"),$=a("app-layout");return k(),U($,{busy:e.busy},{default:n(()=>[i("div",null,[l(p,{title:"Task"},{default:n(()=>[l(u,{title:"Add Task",onClick:t[0]||(t[0]=s=>e.showCreate=!0)})]),_:1})]),i("div",je,[i("div",Me,[i("div",Qe,[l(h,{modelValue:e.perPage,"onUpdate:modelValue":t[1]||(t[1]=s=>e.perPage=s),placeholder:"Per Page"},{prefix:n(()=>[l(m,{class:"el-input__icon"},{default:n(()=>[l(f)]),_:1})]),default:n(()=>[(k(),L(z,null,S([10,20,30,40,50],s=>l(_,{key:s,label:s,value:s},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])]),i("div",Ne,[i("div",Ie,[l(d,null,{default:n(()=>[l(o,{type:e.isCardWise?"info":"primary",onClick:t[2]||(t[2]=s=>e.isCardWise=!1)},{default:n(()=>[l(m,null,{default:n(()=>[l(x)]),_:1})]),_:1},8,["type"]),l(o,{type:e.isCardWise?"primary":"info",onClick:t[3]||(t[3]=s=>e.isCardWise=!0)},{default:n(()=>[l(m,null,{default:n(()=>[l(P)]),_:1})]),_:1},8,["type"])]),_:1})]),i("div",Ye,[l(c,{placeholder:"Type something","prefix-icon":g.Search},{prefix:n(()=>[l(m,{class:"el-input__icon"},{default:n(()=>[l(T)]),_:1})]),_:1},8,["prefix-icon"])])])]),l(v),e.isCardWise?(k(),U(I,{key:0,class:"card-list",gutter:24},{default:n(()=>[(k(!0),L(z,null,S(e.items,(s,C)=>(k(),U(N,{sm:24,md:12,key:C},{default:n(()=>[l(Q,null,{default:n(()=>[l(M,{title:s.title,direction:"horizontal",column:1,size:"small",border:""},{default:n(()=>[l(V,{label:"Assgned To:"},{default:n(()=>[H(A(s.employee.model.name),1)]),_:2},1024),l(V,{label:"Dead Line:"},{default:n(()=>[H(A(s.end),1)]),_:2},1024),l(V,{label:"Status:"},{default:n(()=>[l(B,{status:s.status,size:"small"},null,8,["status"])]),_:2},1024),l(V,{label:"Delete:"},{default:n(()=>[l(o,{size:"small",type:"danger",plain:"",onClick:E=>e.remove(s,C)},{default:n(()=>[l(m,null,{default:n(()=>[l(q)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),l(V,{label:"View:"},{default:n(()=>[l(o,{size:"small",type:"info",plain:"",onClick:E=>e.router.push({name:"task.show",params:{id:s.id}})},{default:n(()=>[l(m,null,{default:n(()=>[l(j)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title"]),i("div",{class:"description",innerHTML:s.description},null,8,Ze)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(k(),U(J,{key:1,items:e.items,columns:e.columns,hoverable:!0,"sort-by":e.sortBy,"onUpdate:sortBy":t[4]||(t[4]=s=>e.sortBy=s),"sorting-order":e.sortingOrder,"onUpdate:sortingOrder":t[5]||(t[5]=s=>e.sortingOrder=s)},{"cell(members)":n(({rowData:s})=>[(k(!0),L(z,null,S(s.members,C=>(k(),U(Y,{size:"small",key:C.id},{default:n(()=>[H(A(C.name),1)]),_:2},1024))),128))]),"cell(status)":n(({value:s})=>[l(B,{status:s,size:"small"},null,8,["status"])]),"cell(action)":n(({rowData:s,rowIndex:C})=>[l(G,{isView:!0,onViewClick:E=>e.router.push({name:"task.show",params:{id:s.id}}),onEditClick:E=>s.showEdit=!0,onRemoveClick:E=>e.remove(s,C)},{default:n(()=>[l(Z,{show:s.showEdit,"onUpdate:show":E=>s.showEdit=E,item:s,employees:e.employees,categories:e.categories,onReplace:E=>e.replace(E,C)},null,8,["show","onUpdate:show","item","employees","categories","onReplace"])]),_:2},1032,["onViewClick","onEditClick","onRemoveClick"])]),_:1},8,["items","columns","sort-by","sorting-order"])),l(K,{links:e.links,onPage:e.fetchItems},null,8,["links","onPage"]),l(X,{show:e.showCreate,"onUpdate:show":t[6]||(t[6]=s=>e.showCreate=s),employees:e.employees,categories:e.categories,onPush:e.push},null,8,["show","employees","categories","onPush"])]),_:1},8,["busy"])}const st=D(qe,[["render",Ge],["__scopeId","data-v-82f881a4"]]);export{st as default};