import{a as ie,S as de}from"./app-layout-3dca36ac.js";import{d as ce,Y as pe,Z as ue,r as m,_ as K,f as V,h as U,w as t,i as c,y as _e,b as e,j as h,z as E,e as s,a6 as D,a7 as j,ap as H,ai as me,aj as ye,ag as fe,ak as ke,H as ve,a9 as he,aq as be,ar as ge,t as Y,u as Ce,l as Te,a1 as we,a2 as xe,c as q,x as Z,F as G}from"./app-090196be.js";import{_ as Ee}from"./PageTitleBox-d182f4bf.js";import{P as Pe}from"./Pagination-12f3e00c.js";import{R as Ve}from"./RemoveEditButton-a6640c4a.js";import{C as ze}from"./Create-4d8610f5.js";import{E as Ae}from"./Edit-3e3c7580.js";import{C as Se}from"./CreateButton-3146a1e5.js";import{h as J}from"./moment-fbc5633a.js";import{u as Ne}from"./useToast-458dfcdd.js";import"./FormDialog-5c633337.js";import"./index-4e0ae16a.js";const Be=ce({components:{CircleCloseFilled:pe,Pointer:ue},model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!0},taskTypes:{type:Array,required:!0}},setup(p,{emit:n}){const b=m(null),o=m(!1),u=m(null),z=i=>{u.value=i.id,b.value=i.value},w=async i=>{try{const _=route("taskType.destroy",{task_type:i});await axios.delete(_),n("removeType",i)}catch(_){console.error(_)}},y=async()=>{if(!b.value)return null;try{if(u.value){const i=route("taskType.update",{taskType:u.value}),{data:_}=await axios.put(i,{title:b.value});n("pushType",_),u.value=null}else{const i=route("taskType.store"),{data:_}=await axios.post(i,{title:b.value});n("pushType",_),u.value=null}b.value=""}catch(i){console.error(i)}},r=()=>{n("update:show",!1)};return{busy:o,props:p,type:b,updateId:u,setEdit:z,remove:w,submit:y,close:r,add:()=>{n("add",!0)},handleClose:i=>{i(),r()}}}}),Ue={class:"my-header",style:{display:"flex","justify-content":"space-between"}},Le=["id"],Re={class:"card-header",style:{display:"flex","justify-content":"space-between"}};function Fe(p,n,b,o,u,z){const w=s("CircleCloseFilled"),y=s("el-icon"),r=s("el-button"),k=s("el-input"),P=s("el-card"),i=s("el-col"),_=s("el-table-column"),S=s("el-table"),N=s("el-row"),B=s("el-dialog");return V(),U(B,{modelValue:p.props.show,"onUpdate:modelValue":n[1]||(n[1]=v=>p.props.show=v),"before-close":p.handleClose,"show-close":!1},{header:t(({close:v,titleId:x,titleClass:L})=>[c("div",Ue,[c("h4",{id:x,class:_e(L)},"Task Types",10,Le),e(r,{type:"danger",size:"small",onClick:v},{default:t(()=>[e(y,{class:"el-icon--left"},{default:t(()=>[e(w)]),_:1}),h(" Close ")]),_:2},1032,["onClick"])])]),footer:t(()=>[]),default:t(()=>[e(N,null,{default:t(()=>[e(i,{span:24},{default:t(()=>[e(P,{class:"box-card"},{header:t(()=>[c("div",Re,[c("span",null,E(p.updateId?"Edit":"Add")+" Type",1),e(r,{type:"primary",onClick:p.submit},{default:t(()=>[h(E(p.updateId?"Update":"Add"),1)]),_:1},8,["onClick"])])]),default:t(()=>[e(k,{modelValue:p.type,"onUpdate:modelValue":n[0]||(n[0]=v=>p.type=v),placeholder:"Please input"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:24,style:{"margin-top":"20px"}},{default:t(()=>[e(S,{data:p.props.taskTypes,style:{width:"100%"}},{default:t(()=>[e(_,{prop:"title",label:"Title"}),e(_,{fixed:"right",label:"Operations",width:"120"},{default:t(({row:v})=>[e(r,{link:"",type:"primary",size:"small",onClick:x=>p.remove(v.id)},{default:t(()=>[h("Delete")]),_:2},1032,["onClick"]),e(r,{link:"",type:"primary",size:"small",onClick:x=>p.setEdit(v)},{default:t(()=>[h("Edit")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1},8,["modelValue","before-close"])}const Ie=K(Be,[["render",Fe],["__scopeId","data-v-89668bbf"]]);const Me={components:{TaskTypesVue:Ie,Delete:D,Edit:j,Download:H,AppLayout:ie,PageTitleBox:Ee,Pagination:Pe,Create:ze,EditVue:Ae,List:me,Box:ye,CreateButton:Se,RemoveEditButton:Ve,StatusBtn:de,More:fe,Search:ke,Collection:ve,Expand:he,Star:be,StarFilled:ge},setup(){const p=m(!1),n=m(!0),b=Ne(),o=Ce(),u=m([]),z=m([]),w=m([]),y=m([]),r=m(!1),k=m(!1),P=m([]),i=m(50),_=[{key:"user_star",label:"Star",sortable:!0},{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"category.title",label:"Category",sortable:!0},{key:"typeName",label:"Type",sortable:!0},{key:"employeeName",label:"Employee",sortable:!0},{key:"start",label:"Start",sortable:!0},{key:"end",label:"Dead Line",sortable:!0},{key:"created_at",label:"AtNow",sortable:!0},{key:"status",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],S=m("asc"),N=a=>{o.push(a)};axios.get(route("taskType.index")).then(({data:a})=>{y.value=a});const B=a=>{let d=y.value.find(g=>g.title==a.title);d?d.title=a.title:y.value.push(a)},v=a=>{const d=y.value.findIndex(g=>g.id==a);d&&y.value.splice(d,1)};Y("employees",a=>{z.value=a}),Y("categories",a=>{w.value=a});const x=async a=>{try{const d=route("task.index",{perPage:i.value,page:a}),{data:g}=await axios.get(d);P.value=g.links,u.value=Te.sortBy(addProtos(g.data,{action:!0,showEdit:!1}),"user_star").reverse().map(f=>(f.employeeName=f.employee.model.name,f.typeName=f.type?f.type.title:"",f))}catch(d){console.error(d)}n.value=!1};return x(1),{Delete:D,Edit:j,Download:H,busy:n,showTaskType:k,showCreate:r,perPage:i,sortingOrder:S,items:u,columns:_,endDate:a=>{if(a.end_time){let d=`${a.end} ${a.end_time}`;return console.log(d),J(d).format("MMM Do YY h:mm a")}else return a.end},removeType:v,pushType:B,push:a=>{r.value=!1,u.value.push(a)},replace:(a,d)=>{r.value=!1,u.value.splice(d,1,a)},fetchItems:x,employees:z,categories:w,taskTypes:y,remove:async(a,d)=>{if(!await we(a,"Task","title"))return null;try{const f=route("task.destroy",{task:a.id});await axios.delete(f),u.value.splice(d,1),xe(b)}catch(f){console.log(f)}},addStar:a=>{a.user_star=!a.user_star,axios.post(route("task.changeStar",{task:a.id}),{prop:"user_star",star:a.user_star?1:0})},doArchive:(a,d)=>{u.value.splice(d,1),axios.post(route("task.doArchive",{task:a.id}),{prop:"user_archive",do:a.user_archive?0:1})},atNow:a=>J(a).fromNow(),links:P,router:o,go:N,isCardWise:p}}},Oe={class:"filter-row mt-2"},We={class:"left-side"},De={class:"item"},je={class:"right-side"},He={class:"item right mr-3"},Ye={class:"item right"},qe=["innerHTML"],Ze={class:"ml-1"},Ge={style:{"min-width":"100px"}};function Je(p,n,b,o,u,z){const w=s("create-button"),y=s("list"),r=s("el-icon"),k=s("el-button"),P=s("download"),i=s("page-title-box"),_=s("el-option"),S=s("collection"),N=s("el-select"),B=s("box"),v=s("el-button-group"),x=s("search"),L=s("el-input"),I=s("el-divider"),A=s("el-descriptions-item"),R=s("status-btn"),M=s("delete"),O=s("more"),W=s("el-descriptions"),a=s("el-card"),d=s("el-col"),g=s("el-row"),f=s("el-link"),Q=s("star-filled"),X=s("el-avatar"),$=s("expand"),F=s("el-dropdown-item"),ee=s("el-dropdown-menu"),te=s("el-dropdown"),oe=s("edit-vue"),le=s("va-data-table"),se=s("pagination"),ae=s("create"),ne=s("task-types-vue"),re=s("app-layout");return V(),U(re,{busy:o.busy},{default:t(()=>[c("div",null,[e(i,{title:"Task"},{default:t(()=>[e(w,{title:"Add Task",onClick:n[0]||(n[0]=l=>o.showCreate=!0)}),e(k,{type:"primary",onClick:n[1]||(n[1]=l=>o.showTaskType=!o.showTaskType)},{default:t(()=>[e(r,null,{default:t(()=>[e(y)]),_:1}),h(" Task Types ")]),_:1}),e(k,{type:"primary",onClick:n[2]||(n[2]=l=>o.router.push({name:"task.archive"}))},{default:t(()=>[e(r,null,{default:t(()=>[e(P)]),_:1}),h(" Archives ")]),_:1})]),_:1})]),c("div",Oe,[c("div",We,[c("div",De,[e(N,{modelValue:o.perPage,"onUpdate:modelValue":n[3]||(n[3]=l=>o.perPage=l),placeholder:"Per Page"},{prefix:t(()=>[e(r,{class:"el-input__icon"},{default:t(()=>[e(S)]),_:1})]),default:t(()=>[(V(),q(G,null,Z([10,20,30,40,50,70,100],l=>e(_,{key:l,label:l,value:l},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])]),c("div",je,[c("div",He,[e(v,null,{default:t(()=>[e(k,{type:o.isCardWise?"info":"primary",onClick:n[4]||(n[4]=l=>o.isCardWise=!1)},{default:t(()=>[e(r,null,{default:t(()=>[e(y)]),_:1})]),_:1},8,["type"]),e(k,{type:o.isCardWise?"primary":"info",onClick:n[5]||(n[5]=l=>o.isCardWise=!0)},{default:t(()=>[e(r,null,{default:t(()=>[e(B)]),_:1})]),_:1},8,["type"])]),_:1})]),c("div",Ye,[e(L,{placeholder:"Type something"},{prefix:t(()=>[e(r,{class:"el-input__icon"},{default:t(()=>[e(x)]),_:1})]),_:1})])])]),e(I),o.isCardWise?(V(),U(g,{key:0,class:"card-list",gutter:24},{default:t(()=>[(V(!0),q(G,null,Z(o.items,(l,C)=>(V(),U(d,{sm:24,md:12,key:C},{default:t(()=>[e(a,null,{default:t(()=>[e(W,{title:l.title,direction:"horizontal",column:1,size:"small",border:""},{default:t(()=>[e(A,{label:"Assgned To:"},{default:t(()=>[h(E(l.employee.model.name),1)]),_:2},1024),e(A,{label:"Dead Line:"},{default:t(()=>[h(E(l.end),1)]),_:2},1024),e(A,{label:"Status:"},{default:t(()=>[e(R,{status:l.status,size:"small"},null,8,["status"])]),_:2},1024),e(A,{label:"Delete:"},{default:t(()=>[e(k,{size:"small",type:"danger",plain:"",onClick:T=>o.remove(l,C)},{default:t(()=>[e(r,null,{default:t(()=>[e(M)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(A,{label:"View:"},{default:t(()=>[e(k,{size:"small",type:"info",plain:"",onClick:T=>o.router.push({name:"task.show",params:{id:l.id}})},{default:t(()=>[e(r,null,{default:t(()=>[e(O)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title"]),c("div",{class:"description",innerHTML:l.description},null,8,qe)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(V(),U(le,{key:1,items:o.items,columns:o.columns,hoverable:!0,"sorting-order":o.sortingOrder,"onUpdate:sortingOrder":n[6]||(n[6]=l=>o.sortingOrder=l)},{"cell(created_at)":t(({value:l})=>[c("span",null,E(o.atNow(l)),1)]),"cell(end)":t(({rowData:l})=>[c("span",null,E(o.endDate(l)),1)]),"cell(title)":t(({rowData:l})=>[e(f,{onClick:C=>o.go({name:"task.show",params:{id:l.id}})},{default:t(()=>[c("b",null,E(l.title),1)]),_:2},1032,["onClick"])]),"cell(user_star)":t(({rowData:l})=>[e(k,{onClick:C=>o.addStar(l),size:"small",type:l.user_star?"warning":"",plain:"",round:""},{default:t(()=>[e(r,null,{default:t(()=>[e(Q)]),_:1})]),_:2},1032,["onClick","type"])]),"cell(employeeName)":t(({rowData:l})=>[e(f,{underline:!1,onClick:C=>o.router.push({name:"userProfile",params:{user:l.employee.model.id}})},{default:t(()=>[e(X,{size:25,src:l.employee.model.avatar.url},null,8,["src"]),c("b",Ze,E(l.employee.model.name),1)]),_:2},1032,["onClick"])]),"cell(status)":t(({value:l})=>[e(R,{status:l,size:"small"},null,8,["status"])]),"cell(action)":t(({rowData:l,rowIndex:C})=>[c("div",Ge,[e(te,{"split-button":"",type:"info",size:"small"},{dropdown:t(()=>[e(ee,null,{default:t(()=>[e(F,{icon:o.Edit,onClick:T=>l.showEdit=!0},{default:t(()=>[h("Edit")]),_:2},1032,["icon","onClick"]),e(F,{icon:o.Delete,onClick:T=>o.remove(l,C)},{default:t(()=>[h("Remove")]),_:2},1032,["icon","onClick"]),e(F,{icon:o.Download,onClick:T=>o.doArchive(l,C)},{default:t(()=>[h("Archive")]),_:2},1032,["icon","onClick"])]),_:2},1024)]),default:t(()=>[e(r,{size:20,onClick:T=>o.go({name:"task.show",params:{id:l.id}})},{default:t(()=>[e($)]),_:2},1032,["onClick"])]),_:2},1024),e(oe,{show:l.showEdit,"onUpdate:show":T=>l.showEdit=T,item:l,employees:o.employees,categories:o.categories,taskTypes:o.taskTypes,onReplace:T=>o.replace(T,C)},null,8,["show","onUpdate:show","item","employees","categories","taskTypes","onReplace"])])]),_:1},8,["items","columns","sorting-order"])),e(se,{links:o.links,onPage:o.fetchItems},null,8,["links","onPage"]),e(ae,{show:o.showCreate,"onUpdate:show":n[7]||(n[7]=l=>o.showCreate=l),employees:o.employees,categories:o.categories,taskTypes:o.taskTypes,onPush:o.push},null,8,["show","employees","categories","taskTypes","onPush"]),e(ne,{show:o.showTaskType,"onUpdate:show":n[8]||(n[8]=l=>o.showTaskType=l),taskTypes:o.taskTypes,onPushType:o.pushType,onRemoveType:o.removeType},null,8,["show","taskTypes","onPushType","onRemoveType"])]),_:1},8,["busy"])}const it=K(Me,[["render",Je],["__scopeId","data-v-a721a82d"]]);export{it as default};
