import{a as ee,S as te}from"./app-layout-07ff5ad6.js";import{_ as oe}from"./PageTitleBox-c4608ada.js";import{P as le}from"./Pagination-8ac6ea5b.js";import{R as ae}from"./RemoveEditButton-e735f819.js";import{C as se,E as ne}from"./Edit-2c736150.js";import{C as re}from"./CreateButton-487176b0.js";import{_ as ie,X as ce,a9 as de,aa as _e,W as ue,a7 as pe,ab as me,x as fe,Z as ye,ah as ve,ai as ke,aj as he,r as p,ac as R,h as C,w as t,u as ge,l as be,Q as Ce,R as we,e as a,f as k,i as d,b as e,j as A,c as O,p as U,F,t as h}from"./app-65c4e35f.js";import{h as xe}from"./moment-fbc5633a.js";import{u as Pe}from"./useToast-5adcc40c.js";import"./FormDialog-bc8e4f1c.js";import"./index-6bd5dc00.js";const Se={components:{AppLayout:ee,PageTitleBox:oe,Pagination:le,Create:se,EditVue:ne,Edit:ce,List:de,Box:_e,CreateButton:re,RemoveEditButton:ae,StatusBtn:te,Delete:ue,More:pe,Search:me,Collection:fe,Expand:ye,Download:ve,Star:ke,StarFilled:he},setup(){const w=p(!1),n=p(!0),E=Pe(),l=ge(),m=p([]),x=p([]),g=p([]),f=p(!1),r=p([]),c=p(50),P=[{key:"user_star",label:"Star",sortable:!0},{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"category.title",label:"Category",sortable:!0},{key:"employee",label:"Employee",sortable:!0},{key:"start",label:"Start",sortable:!0},{key:"end",label:"Dead Line",sortable:!0},{key:"created_at",label:"AtNow",sortable:!1},{key:"status",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],S=p("asc");R("employees",s=>{x.value=s}),R("categories",s=>{g.value=s});const b=async s=>{try{const i=route("task.index",{perPage:c.value,page:s}),{data:y}=await axios.get(i);r.value=y.links,m.value=be.sortBy(addProtos(y.data,{action:!0,showEdit:!1}),"user_star").reverse()}catch(i){console.error(i)}n.value=!1};return b(1),{busy:n,showCreate:f,perPage:c,sortingOrder:S,items:m,columns:P,push:s=>{f.value=!1,m.value.push(s)},replace:(s,i)=>{f.value=!1,m.value.splice(i,1,s)},fetchItems:b,employees:x,categories:g,remove:async(s,i)=>{if(!await Ce(s,"Task","title"))return null;try{const v=route("task.destroy",{task:s.id});await axios.delete(v),m.value.splice(i,1),we(E)}catch(v){console.log(v)}},addStar:s=>{s.user_star=!s.user_star,axios.post(route("task.changeStar",{task:s.id}),{prop:"user_star",star:s.user_star?0:1})},doArchive:(s,i)=>{m.value.splice(i,1),axios.post(route("task.doArchive",{task:s.id}),{prop:"user_archive",do:s.user_archive?0:1})},atNow:s=>xe(s).fromNow(),links:r,router:l,isCardWise:w}}},ze={class:"filter-row mt-2"},Ae={class:"left-side"},Ee={class:"item"},Be={class:"right-side"},Te={class:"item right mr-3"},Ve={class:"item right"},Le=["innerHTML"],Ne={class:"ml-1"};function We(w,n,E,l,m,x){const g=a("create-button"),f=a("download"),r=a("el-icon"),c=a("el-button"),P=a("page-title-box"),S=a("el-option"),b=a("collection"),B=a("el-select"),T=a("list"),V=a("box"),z=a("el-button-group"),L=a("search"),N=a("el-input"),s=a("el-divider"),i=a("el-descriptions-item"),y=a("status-btn"),v=a("delete"),M=a("more"),j=a("el-descriptions"),H=a("el-card"),I=a("el-col"),Q=a("el-row"),W=a("el-link"),X=a("star-filled"),Z=a("el-avatar"),q=a("expand"),G=a("edit"),J=a("edit-vue"),K=a("va-data-table"),Y=a("pagination"),D=a("create"),$=a("app-layout");return k(),C($,{busy:l.busy},{default:t(()=>[d("div",null,[e(P,{title:"Task"},{default:t(()=>[e(g,{title:"Add Task",onClick:n[0]||(n[0]=o=>l.showCreate=!0)}),e(c,{type:"primary",onClick:n[1]||(n[1]=o=>l.router.push({name:"task.archive"}))},{default:t(()=>[e(r,null,{default:t(()=>[e(f)]),_:1}),A(" Archives ")]),_:1})]),_:1})]),d("div",ze,[d("div",Ae,[d("div",Ee,[e(B,{modelValue:l.perPage,"onUpdate:modelValue":n[2]||(n[2]=o=>l.perPage=o),placeholder:"Per Page"},{prefix:t(()=>[e(r,{class:"el-input__icon"},{default:t(()=>[e(b)]),_:1})]),default:t(()=>[(k(),O(F,null,U([10,20,30,40,50,70,100],o=>e(S,{key:o,label:o,value:o},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])]),d("div",Be,[d("div",Te,[e(z,null,{default:t(()=>[e(c,{type:l.isCardWise?"info":"primary",onClick:n[3]||(n[3]=o=>l.isCardWise=!1)},{default:t(()=>[e(r,null,{default:t(()=>[e(T)]),_:1})]),_:1},8,["type"]),e(c,{type:l.isCardWise?"primary":"info",onClick:n[4]||(n[4]=o=>l.isCardWise=!0)},{default:t(()=>[e(r,null,{default:t(()=>[e(V)]),_:1})]),_:1},8,["type"])]),_:1})]),d("div",Ve,[e(N,{placeholder:"Type something"},{prefix:t(()=>[e(r,{class:"el-input__icon"},{default:t(()=>[e(L)]),_:1})]),_:1})])])]),e(s),l.isCardWise?(k(),C(Q,{key:0,class:"card-list",gutter:24},{default:t(()=>[(k(!0),O(F,null,U(l.items,(o,_)=>(k(),C(I,{sm:24,md:12,key:_},{default:t(()=>[e(H,null,{default:t(()=>[e(j,{title:o.title,direction:"horizontal",column:1,size:"small",border:""},{default:t(()=>[e(i,{label:"Assgned To:"},{default:t(()=>[A(h(o.employee.model.name),1)]),_:2},1024),e(i,{label:"Dead Line:"},{default:t(()=>[A(h(o.end),1)]),_:2},1024),e(i,{label:"Status:"},{default:t(()=>[e(y,{status:o.status,size:"small"},null,8,["status"])]),_:2},1024),e(i,{label:"Delete:"},{default:t(()=>[e(c,{size:"small",type:"danger",plain:"",onClick:u=>l.remove(o,_)},{default:t(()=>[e(r,null,{default:t(()=>[e(v)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(i,{label:"View:"},{default:t(()=>[e(c,{size:"small",type:"info",plain:"",onClick:u=>l.router.push({name:"task.show",params:{id:o.id}})},{default:t(()=>[e(r,null,{default:t(()=>[e(M)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title"]),d("div",{class:"description",innerHTML:o.description},null,8,Le)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(k(),C(K,{key:1,items:l.items,columns:l.columns,hoverable:!0,"sorting-order":l.sortingOrder,"onUpdate:sortingOrder":n[5]||(n[5]=o=>l.sortingOrder=o)},{"cell(created_at)":t(({value:o})=>[d("span",null,h(l.atNow(o)),1)]),"cell(title)":t(({rowData:o})=>[e(W,{onClick:_=>w.go({name:"task.show",params:{id:o.id}})},{default:t(()=>[d("b",null,h(o.title),1)]),_:2},1032,["onClick"])]),"cell(user_star)":t(({rowData:o})=>[e(c,{onClick:_=>l.addStar(o),size:"small",type:o.user_star?"warning":"",plain:"",round:""},{default:t(()=>[e(r,null,{default:t(()=>[e(X)]),_:1})]),_:2},1032,["onClick","type"])]),"cell(employee)":t(({rowData:o})=>[e(W,{underline:!1,onClick:_=>l.router.push({name:"userProfile",params:{user:o.employee.model.id}})},{default:t(()=>[e(Z,{size:25,src:o.employee.model.avatar.url},null,8,["src"]),d("b",Ne,h(o.employee.model.name),1)]),_:2},1032,["onClick"])]),"cell(status)":t(({value:o})=>[e(y,{status:o,size:"small"},null,8,["status"])]),"cell(action)":t(({rowData:o,rowIndex:_})=>[d("div",null,[e(z,null,{default:t(()=>[e(c,{type:"primary",size:"small",title:"Archive",onClick:u=>l.doArchive(o,_)},{default:t(()=>[e(r,null,{default:t(()=>[e(f)]),_:1})]),_:2},1032,["onClick"]),e(c,{type:"primary",size:"small",onClick:u=>l.router.push({name:"task.show",params:{id:o.id}}),title:"Show"},{default:t(()=>[e(r,{size:20},{default:t(()=>[e(q)]),_:1})]),_:2},1032,["onClick"]),e(c,{type:"primary",size:"small",onClick:u=>o.showEdit=!0,title:"edit"},{default:t(()=>[e(r,{size:20},{default:t(()=>[e(G)]),_:1})]),_:2},1032,["onClick"]),e(c,{type:"danger",size:"small",onClick:u=>l.remove(o,_),title:"remove"},{default:t(()=>[e(r,null,{default:t(()=>[e(v)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(J,{show:o.showEdit,"onUpdate:show":u=>o.showEdit=u,item:o,employees:l.employees,categories:l.categories,onReplace:u=>l.replace(u,_)},null,8,["show","onUpdate:show","item","employees","categories","onReplace"])])]),_:1},8,["items","columns","sorting-order"])),e(Y,{links:l.links,onPage:l.fetchItems},null,8,["links","onPage"]),e(D,{show:l.showCreate,"onUpdate:show":n[6]||(n[6]=o=>l.showCreate=o),employees:l.employees,categories:l.categories,onPush:l.push},null,8,["show","employees","categories","onPush"])]),_:1},8,["busy"])}const qe=ie(Se,[["render",We],["__scopeId","data-v-5dca561a"]]);export{qe as default};
