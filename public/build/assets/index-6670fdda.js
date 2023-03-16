import{a as ee}from"./app-layout-4368b8fd.js";import{_ as te}from"./PageTitleBox-624ea85e.js";import{P as oe}from"./Pagination-16f313d1.js";import{R as le}from"./RemoveEditButton-58271307.js";import{C as se,E as ae}from"./Edit-84cfda19.js";import{C as ne}from"./CreateButton-57f8a189.js";import{_ as re,W as ie,a8 as ce,a9 as de,V as _e,a6 as ue,aa as pe,v as me,Y as fe,ah as ve,ai as ye,aj as he,r as p,ab as O,h as b,w as t,u as ke,l as ge,P as be,Q as Ce,e as s,f as h,i as d,b as e,j as S,c as R,n as U,F,t as z}from"./app-15ad5095.js";import{S as xe}from"./statusBtn-f4137a6f.js";import{u as we}from"./useToast-453dba0d.js";import"./FormDialog-9f17f8d5.js";import"./index-e21665d8.js";import"./moment-fbc5633a.js";const Pe={components:{AppLayout:ee,PageTitleBox:te,Pagination:oe,Create:se,EditVue:ae,Edit:ie,List:ce,Box:de,CreateButton:ne,RemoveEditButton:le,StatusBtn:xe,Delete:_e,More:ue,Search:pe,Collection:me,Expand:fe,Download:ve,Star:ye,StarFilled:he},setup(){const E=p(!1),n=p(!0),A=we(),l=ke(),f=p([]),C=p([]),k=p([]),v=p(!1),r=p([]),i=p(50),x=[{key:"user_star",label:"Star",sortable:!0},{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"category.title",label:"Category",sortable:!0},{key:"employee",label:"Employee",sortable:!0},{key:"start",label:"Start",sortable:!0},{key:"end",label:"Dead Line",sortable:!0},{key:"status",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],w=p("asc");O("employees",a=>{C.value=a}),O("categories",a=>{k.value=a});const g=async a=>{try{const c=route("task.index",{perPage:i.value,page:a}),{data:_}=await axios.get(c);r.value=_.links,f.value=ge.sortBy(addProtos(_.data,{action:!0,showEdit:!1}),"user_star").reverse()}catch(c){console.error(c)}n.value=!1};return g(1),{busy:n,showCreate:v,perPage:i,sortingOrder:w,items:f,columns:x,push:a=>{v.value=!1,f.value.push(a)},replace:(a,c)=>{v.value=!1,f.value.splice(c,1,a)},fetchItems:g,employees:C,categories:k,remove:async(a,c)=>{if(!await be(a,"Task","title"))return null;try{const y=route("task.destroy",{task:a.id});await axios.delete(y),f.value.splice(c,1),Ce(A)}catch(y){console.log(y)}},addStar:a=>{a.user_star=!a.user_star,axios.post(route("task.changeStar",{task:a.id}),{prop:"user_star",star:a.user_star?0:1})},doArchive:(a,c)=>{f.value.splice(c,1),axios.post(route("task.doArchive",{task:a.id}),{prop:"user_archive",do:a.user_archive?0:1})},links:r,router:l,isCardWise:E}}},Se={class:"filter-row mt-2"},ze={class:"left-side"},Ee={class:"item"},Ae={class:"right-side"},Be={class:"item right mr-3"},Ve={class:"item right"},Te=["innerHTML"],Le={class:"ml-1"};function We(E,n,A,l,f,C){const k=s("create-button"),v=s("download"),r=s("el-icon"),i=s("el-button"),x=s("page-title-box"),w=s("el-option"),g=s("collection"),B=s("el-select"),V=s("list"),T=s("box"),P=s("el-button-group"),L=s("search"),a=s("el-input"),c=s("el-divider"),_=s("el-descriptions-item"),y=s("status-btn"),W=s("delete"),M=s("more"),N=s("el-descriptions"),j=s("el-card"),H=s("el-col"),I=s("el-row"),Q=s("star-filled"),Y=s("el-avatar"),q=s("el-link"),G=s("expand"),J=s("edit"),K=s("edit-vue"),X=s("va-data-table"),Z=s("pagination"),D=s("create"),$=s("app-layout");return h(),b($,{busy:l.busy},{default:t(()=>[d("div",null,[e(x,{title:"Task"},{default:t(()=>[e(k,{title:"Add Task",onClick:n[0]||(n[0]=o=>l.showCreate=!0)}),e(i,{type:"primary",onClick:n[1]||(n[1]=o=>l.router.push({name:"task.archive"}))},{default:t(()=>[e(r,null,{default:t(()=>[e(v)]),_:1}),S(" Archives ")]),_:1})]),_:1})]),d("div",Se,[d("div",ze,[d("div",Ee,[e(B,{modelValue:l.perPage,"onUpdate:modelValue":n[2]||(n[2]=o=>l.perPage=o),placeholder:"Per Page"},{prefix:t(()=>[e(r,{class:"el-input__icon"},{default:t(()=>[e(g)]),_:1})]),default:t(()=>[(h(),R(F,null,U([10,20,30,40,50,70,100],o=>e(w,{key:o,label:o,value:o},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])]),d("div",Ae,[d("div",Be,[e(P,null,{default:t(()=>[e(i,{type:l.isCardWise?"info":"primary",onClick:n[3]||(n[3]=o=>l.isCardWise=!1)},{default:t(()=>[e(r,null,{default:t(()=>[e(V)]),_:1})]),_:1},8,["type"]),e(i,{type:l.isCardWise?"primary":"info",onClick:n[4]||(n[4]=o=>l.isCardWise=!0)},{default:t(()=>[e(r,null,{default:t(()=>[e(T)]),_:1})]),_:1},8,["type"])]),_:1})]),d("div",Ve,[e(a,{placeholder:"Type something"},{prefix:t(()=>[e(r,{class:"el-input__icon"},{default:t(()=>[e(L)]),_:1})]),_:1})])])]),e(c),l.isCardWise?(h(),b(I,{key:0,class:"card-list",gutter:24},{default:t(()=>[(h(!0),R(F,null,U(l.items,(o,m)=>(h(),b(H,{sm:24,md:12,key:m},{default:t(()=>[e(j,null,{default:t(()=>[e(N,{title:o.title,direction:"horizontal",column:1,size:"small",border:""},{default:t(()=>[e(_,{label:"Assgned To:"},{default:t(()=>[S(z(o.employee.model.name),1)]),_:2},1024),e(_,{label:"Dead Line:"},{default:t(()=>[S(z(o.end),1)]),_:2},1024),e(_,{label:"Status:"},{default:t(()=>[e(y,{status:o.status,size:"small"},null,8,["status"])]),_:2},1024),e(_,{label:"Delete:"},{default:t(()=>[e(i,{size:"small",type:"danger",plain:"",onClick:u=>l.remove(o,m)},{default:t(()=>[e(r,null,{default:t(()=>[e(W)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(_,{label:"View:"},{default:t(()=>[e(i,{size:"small",type:"info",plain:"",onClick:u=>l.router.push({name:"task.show",params:{id:o.id}})},{default:t(()=>[e(r,null,{default:t(()=>[e(M)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title"]),d("div",{class:"description",innerHTML:o.description},null,8,Te)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(h(),b(X,{key:1,items:l.items,columns:l.columns,hoverable:!0,"sorting-order":l.sortingOrder,"onUpdate:sortingOrder":n[5]||(n[5]=o=>l.sortingOrder=o)},{"cell(user_star)":t(({rowData:o})=>[e(i,{onClick:m=>l.addStar(o),size:"small",type:o.user_star?"warning":"",plain:"",round:""},{default:t(()=>[e(r,null,{default:t(()=>[e(Q)]),_:1})]),_:2},1032,["onClick","type"])]),"cell(employee)":t(({rowData:o})=>[e(q,{underline:!1,onClick:m=>l.router.push({name:"userProfile",params:{user:o.employee.model.id}})},{default:t(()=>[e(Y,{size:25,src:o.employee.model.avatar.url},null,8,["src"]),d("b",Le,z(o.employee.model.name),1)]),_:2},1032,["onClick"])]),"cell(status)":t(({value:o})=>[e(y,{status:o,size:"small"},null,8,["status"])]),"cell(action)":t(({rowData:o,rowIndex:m})=>[d("div",null,[e(P,null,{default:t(()=>[e(i,{type:"primary",size:"small",title:"Archive",onClick:u=>l.doArchive(o,m)},{default:t(()=>[e(r,null,{default:t(()=>[e(v)]),_:1})]),_:2},1032,["onClick"]),e(i,{type:"primary",size:"small",onClick:u=>l.router.push({name:"task.show",params:{id:o.id}}),title:"Show"},{default:t(()=>[e(r,null,{default:t(()=>[e(G)]),_:1})]),_:2},1032,["onClick"]),e(i,{type:"primary",size:"small",onClick:u=>o.showEdit=!0,title:"edit"},{default:t(()=>[e(r,null,{default:t(()=>[e(J)]),_:1})]),_:2},1032,["onClick"]),e(i,{type:"danger",size:"small",onClick:u=>l.remove(o,m),title:"remove"},{default:t(()=>[e(r,null,{default:t(()=>[e(W)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(K,{show:o.showEdit,"onUpdate:show":u=>o.showEdit=u,item:o,employees:l.employees,categories:l.categories,onReplace:u=>l.replace(u,m)},null,8,["show","onUpdate:show","item","employees","categories","onReplace"])])]),_:1},8,["items","columns","sorting-order"])),e(Z,{links:l.links,onPage:l.fetchItems},null,8,["links","onPage"]),e(D,{show:l.showCreate,"onUpdate:show":n[6]||(n[6]=o=>l.showCreate=o),employees:l.employees,categories:l.categories,onPush:l.push},null,8,["show","employees","categories","onPush"])]),_:1},8,["busy"])}const Ge=re(Pe,[["render",We],["__scopeId","data-v-139513eb"]]);export{Ge as default};
