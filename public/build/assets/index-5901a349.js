import{a as ee}from"./app-layout-b5cf8580.js";import{_ as te}from"./PageTitleBox-aaded2a2.js";import{P as oe}from"./Pagination-fc4f803b.js";import{R as le}from"./RemoveEditButton-d8b70e6f.js";import{F as O}from"./FormDialog-b0635048.js";import{r as R}from"./index-261a8ab4.js";import{h as W}from"./moment-fbc5633a.js";import{_ as D,r,f as w,h as T,w as n,b as l,i,j as B,t as H,e as a,M as ae,a7 as ne,a8 as se,U as re,a5 as ie,a9 as de,v as ce,aa as F,u as ue,O as me,P as pe,c as L,n as S,F as z}from"./app-44c844f3.js";import{C as _e}from"./CreateButton-6467a51e.js";import{S as fe}from"./statusBtn-5eed707e.js";import{u as ve}from"./useToast-c6130b9b.js";const ye={components:{FormDialog:O},props:{show:{type:Boolean,default:!1},employees:{type:Array,required:!0},categories:{type:Array,required:!0}},setup(k,{emit:t}){let V=r(!1);const e=r(!1),y=r(null);let g=r(""),c=r(null),m=r(null);const _=r(W().format(dateFormat)),f=r(null),u=r(""),b=r([]);return{props:k,form:y,emit:t,save:async()=>{var v;let o=route("task.store");if(!await y.value.validate())return null;e.value=!0;try{const p=new FormData;p.append("title",g.value),p.append("category",c.value),p.append("employee",(v=m.value)==null?void 0:v.id),p.append("start",_.value),p.append("end",f.value),p.append("description",u.value),b.value.forEach((h,x)=>{p.append(`attachments[${x}]`,h)});const{data:d}=await axios.post(o,p);t("push",addProtos(d,{action:!0,showEdit:!1}))}catch(p){console.error(p),validErorrs(p)}e.value=!1},rs:R,busy:V,formBusy:e,title:g,start:_,end:f,employee:m,category:c,description:u,attachments:b}}},be={class:"layout gutter--md"},he={class:"row align-content--center"},ge={class:"flex xs12 in-box"},xe={class:"flex xs12 in-box"},ke={class:"flex xs12 in-box"},we={class:"flex xs6 in-box"},Ve={class:"flex xs6 in-box"},Ce={class:"flex xs12 in-box"},Ee={class:"flex xs12",style:{"min-height":"150px","margin-bottom":"50px"}};function Ue(k,t,V,e,y,g){const c=a("va-input"),m=a("va-select"),_=a("va-chip"),f=a("va-file-upload"),u=a("QuillEditor"),b=a("va-form"),C=a("form-dialog");return w(),T(C,{show:e.props.show,"onUpdate:show":t[7]||(t[7]=o=>e.emit("update:show",o)),busy:e.formBusy,title:"Create Task",onAdd:e.save,fullscreen:!0},{default:n(()=>[l(b,{ref:"form"},{default:n(()=>[i("div",be,[i("div",he,[i("div",ge,[l(c,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=o=>e.title=o),label:"Title *",placeholder:"Title Here",rules:e.rs("title",!0)},null,8,["modelValue","rules"])]),i("div",xe,[l(m,{modelValue:e.category,"onUpdate:modelValue":t[1]||(t[1]=o=>e.category=o),label:"Project Category *",placeholder:"Category Here",rules:e.rs("Category",!0),"text-by":"title","value-by":"id",options:e.props.categories},null,8,["modelValue","rules","options"])]),i("div",ke,[l(m,{modelValue:e.employee,"onUpdate:modelValue":t[2]||(t[2]=o=>e.employee=o),label:"Task Employee *",placeholder:"Task Employee Here",rules:e.rs("member",!0),searchable:"","text-by":"name",options:e.props.employees},{content:n(({value:o})=>[l(_,{size:"small",class:"mr-1 my-1"},{default:n(()=>[B(H(o.name),1)]),_:2},1024)]),_:1},8,["modelValue","rules","options"])]),i("div",we,[l(c,{modelValue:e.start,"onUpdate:modelValue":t[3]||(t[3]=o=>e.start=o),label:"Start *",type:"date",placeholder:"Start Here",rules:e.rs("start",!0)},null,8,["modelValue","rules"])]),i("div",Ve,[l(c,{modelValue:e.end,"onUpdate:modelValue":t[4]||(t[4]=o=>e.end=o),type:"date",label:"Dead Line *",placeholder:"Dead Line Here",rules:e.rs("dead line",!0)},null,8,["modelValue","rules"])]),i("div",Ce,[l(f,{modelValue:e.attachments,"onUpdate:modelValue":t[5]||(t[5]=o=>e.attachments=o),dropzone:""},null,8,["modelValue"])]),i("div",Ee,[l(u,{theme:"snow",toolbar:"minimal",contentType:"html",content:e.description,"onUpdate:content":t[6]||(t[6]=o=>e.description=o),placeholder:"Description Html Contant"},null,8,["content"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const Te=D(ye,[["render",Ue]]),Pe={components:{FormDialog:O},props:{show:{type:Boolean,default:!1},employees:{type:Array,required:!0},categories:{type:Array,required:!0},item:{type:Object,required:!0}},setup(k,{emit:t}){let V=r(null),e=r(!1);const y=r(null);let g=r(""),c=r(null),m=r(null);const _=r(W().format(dateFormat)),f=r(null),u=r(""),b=r([]);return ae(k.item,o=>{g.value=o.title,m.value=o.employee,c.value=o.category_id,_.value=o.start,f.value=o.end,u.value=o.description,V.value=o},{immediate:!0}),{props:k,form:y,emit:t,save:async()=>{var p;let o=route("task.update",{task:V.value.id});if(!await y.value.validate())return null;const v=new FormData;v.append("_method","PUT"),v.append("title",g.value),v.append("category",c.value),v.append("employee",(p=m.value)==null?void 0:p.id),v.append("start",_.value),v.append("end",f.value),v.append("description",u.value),b.value.forEach((d,h)=>{v.append(`attachments[${h}]`,d)});try{const{data:d}=await axios.post(o,v);t("replace",addProtos(d,{action:!0,showEdit:!1}))}catch(d){console.error(d),validErorrs(d)}},rs:R,busy:e,title:g,start:_,end:f,employee:m,category:c,description:u,attachments:b}}},Be={class:"layout gutter--md"},He={class:"row align-content--center"},Ae={class:"flex xs12 in-box"},Le={class:"flex xs12 in-box"},Se={class:"flex xs12 in-box"},ze={class:"flex xs6 in-box"},De={class:"flex xs6 in-box"},Fe={class:"flex xs12 in-box"},Oe={class:"flex xs12",style:{"min-height":"150px","margin-bottom":"50px"}};function Re(k,t,V,e,y,g){const c=a("va-input"),m=a("va-select"),_=a("va-chip"),f=a("va-file-upload"),u=a("QuillEditor"),b=a("va-form"),C=a("form-dialog");return w(),T(C,{show:e.props.show,"onUpdate:show":t[7]||(t[7]=o=>e.emit("update:show",o)),busy:e.busy,title:"Edit Task",onAdd:e.save,fullscreen:!0},{default:n(()=>[l(b,{ref:"form"},{default:n(()=>[i("div",Be,[i("div",He,[i("div",Ae,[l(c,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=o=>e.title=o),label:"Title *",placeholder:"Title Here",rules:e.rs("title",!0)},null,8,["modelValue","rules"])]),i("div",Le,[l(m,{modelValue:e.category,"onUpdate:modelValue":t[1]||(t[1]=o=>e.category=o),label:"Project Category *",placeholder:"Category Here",rules:e.rs("Category",!0),"text-by":"title","value-by":"id",options:e.props.categories},null,8,["modelValue","rules","options"])]),i("div",Se,[l(m,{modelValue:e.employee,"onUpdate:modelValue":t[2]||(t[2]=o=>e.employee=o),label:"Task Employee *",placeholder:"Task Employee Here",rules:e.rs("member",!0),searchable:"","text-by":"name",options:e.props.employees},{content:n(({value:o})=>[l(_,{size:"small",class:"mr-1 my-1"},{default:n(()=>[B(H(o.name),1)]),_:2},1024)]),_:1},8,["modelValue","rules","options"])]),i("div",ze,[l(c,{modelValue:e.start,"onUpdate:modelValue":t[3]||(t[3]=o=>e.start=o),label:"Start *",type:"date",placeholder:"Start Here",rules:e.rs("start",!0)},null,8,["modelValue","rules"])]),i("div",De,[l(c,{modelValue:e.end,"onUpdate:modelValue":t[4]||(t[4]=o=>e.end=o),type:"date",label:"Dead Line *",placeholder:"Dead Line Here",rules:e.rs("dead line",!0)},null,8,["modelValue","rules"])]),i("div",Fe,[l(f,{modelValue:e.attachments,"onUpdate:modelValue":t[5]||(t[5]=o=>e.attachments=o),dropzone:""},null,8,["modelValue"])]),i("div",Oe,[l(u,{theme:"snow",toolbar:"minimal",contentType:"html",content:e.description,"onUpdate:content":t[6]||(t[6]=o=>e.description=o),placeholder:"Description Html Contant"},null,8,["content"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const We=D(Pe,[["render",Re]]);const qe={components:{AppLayout:ee,PageTitleBox:te,Pagination:oe,Create:Te,Edit:We,List:ne,Box:se,CreateButton:_e,RemoveEditButton:le,StatusBtn:fe,Delete:re,More:ie,Search:de,Collection:ce},setup(){const k=r(!0),t=r(!0),V=ve(),e=ue(),y=r([]),g=r([]),c=r([]),m=r(!1),_=r([]),f=r(10),u=r("title"),b=[{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"category.title",label:"Category",sortable:!0},{key:"employee.name",label:"Employee",sortable:!0},{key:"start",label:"Start",sortable:!0},{key:"end",label:"Dead Line",sortable:!0},{key:"status",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],C=r("asc");F("employees",d=>{g.value=d}),F("categories",d=>{c.value=d});const o=async d=>{try{const h=route("task.index",{perPage:f.value,page:d}),{data:x}=await axios.get(h);_.value=x.links,y.value=addProtos(x.data,{action:!0,showEdit:!1})}catch(h){console.error(h)}t.value=!1};return o(1),{busy:t,showCreate:m,perPage:f,sortingOrder:C,items:y,columns:b,sortBy:u,push:d=>{m.value=!1,y.value.push(d)},replace:(d,h)=>{m.value=!1,y.value.splice(h,1,d)},fetchItems:o,employees:g,categories:c,remove:async(d,h)=>{if(!await me(d,"Task","title"))return null;try{const P=route("task.destroy",{task:d.id});await axios.delete(P),y.value.splice(h,1),pe(V)}catch(P){console.log(P)}},links:_,router:e,isCardWise:k}}},je={class:"filter-row mt-2"},Me={class:"left-side"},Qe={class:"item"},Ne={class:"right-side"},Ie={class:"item right mr-3"},Ge={class:"item right"},Je=["innerHTML"];function Ke(k,t,V,e,y,g){const c=a("create-button"),m=a("page-title-box"),_=a("el-option"),f=a("collection"),u=a("el-icon"),b=a("el-select"),C=a("list"),o=a("el-button"),A=a("box"),v=a("el-button-group"),p=a("search"),d=a("el-input"),h=a("el-divider"),x=a("el-descriptions-item"),P=a("status-btn"),q=a("delete"),j=a("more"),M=a("el-descriptions"),Q=a("el-card"),N=a("el-col"),I=a("el-row"),G=a("va-chip"),J=a("edit"),K=a("remove-edit-button"),X=a("va-data-table"),Y=a("pagination"),Z=a("create"),$=a("app-layout");return w(),T($,{busy:e.busy},{default:n(()=>[i("div",null,[l(m,{title:"Task"},{default:n(()=>[l(c,{title:"Add Task",onClick:t[0]||(t[0]=s=>e.showCreate=!0)})]),_:1})]),i("div",je,[i("div",Me,[i("div",Qe,[l(b,{modelValue:e.perPage,"onUpdate:modelValue":t[1]||(t[1]=s=>e.perPage=s),placeholder:"Per Page"},{prefix:n(()=>[l(u,{class:"el-input__icon"},{default:n(()=>[l(f)]),_:1})]),default:n(()=>[(w(),L(z,null,S([10,20,30,40,50],s=>l(_,{key:s,label:s,value:s},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])]),i("div",Ne,[i("div",Ie,[l(v,null,{default:n(()=>[l(o,{type:e.isCardWise?"info":"primary",onClick:t[2]||(t[2]=s=>e.isCardWise=!1)},{default:n(()=>[l(u,null,{default:n(()=>[l(C)]),_:1})]),_:1},8,["type"]),l(o,{type:e.isCardWise?"primary":"info",onClick:t[3]||(t[3]=s=>e.isCardWise=!0)},{default:n(()=>[l(u,null,{default:n(()=>[l(A)]),_:1})]),_:1},8,["type"])]),_:1})]),i("div",Ge,[l(d,{placeholder:"Type something","prefix-icon":k.Search},{prefix:n(()=>[l(u,{class:"el-input__icon"},{default:n(()=>[l(p)]),_:1})]),_:1},8,["prefix-icon"])])])]),l(h),e.isCardWise?(w(),T(I,{key:0,class:"card-list",gutter:24},{default:n(()=>[(w(!0),L(z,null,S(e.items,(s,E)=>(w(),T(N,{sm:24,md:12,key:E},{default:n(()=>[l(Q,null,{default:n(()=>[l(M,{title:s.title,direction:"horizontal",column:1,size:"small",border:""},{default:n(()=>[l(x,{label:"Assgned To:"},{default:n(()=>[B(H(s.employee.model.name),1)]),_:2},1024),l(x,{label:"Dead Line:"},{default:n(()=>[B(H(s.end),1)]),_:2},1024),l(x,{label:"Status:"},{default:n(()=>[l(P,{status:s.status,size:"small"},null,8,["status"])]),_:2},1024),l(x,{label:"Delete:"},{default:n(()=>[l(o,{size:"small",type:"danger",plain:"",onClick:U=>e.remove(s,E)},{default:n(()=>[l(u,null,{default:n(()=>[l(q)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),l(x,{label:"View:"},{default:n(()=>[l(o,{size:"small",type:"info",plain:"",onClick:U=>e.router.push({name:"task.show",params:{id:s.id}})},{default:n(()=>[l(u,null,{default:n(()=>[l(j)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title"]),i("div",{class:"description",innerHTML:s.description},null,8,Je)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(w(),T(X,{key:1,items:e.items,columns:e.columns,hoverable:!0,"sort-by":e.sortBy,"onUpdate:sortBy":t[4]||(t[4]=s=>e.sortBy=s),"sorting-order":e.sortingOrder,"onUpdate:sortingOrder":t[5]||(t[5]=s=>e.sortingOrder=s)},{"cell(members)":n(({rowData:s})=>[(w(!0),L(z,null,S(s.members,E=>(w(),T(G,{size:"small",key:E.id},{default:n(()=>[B(H(E.name),1)]),_:2},1024))),128))]),"cell(status)":n(({value:s})=>[l(P,{status:s,size:"small"},null,8,["status"])]),"cell(action)":n(({rowData:s,rowIndex:E})=>[l(K,{isView:!0,onViewClick:U=>e.router.push({name:"task.show",params:{id:s.id}}),onEditClick:U=>s.showEdit=!0,onRemoveClick:U=>e.remove(s,E)},{default:n(()=>[l(J,{show:s.showEdit,"onUpdate:show":U=>s.showEdit=U,item:s,employees:e.employees,categories:e.categories,onReplace:U=>e.replace(U,E)},null,8,["show","onUpdate:show","item","employees","categories","onReplace"])]),_:2},1032,["onViewClick","onEditClick","onRemoveClick"])]),_:1},8,["items","columns","sort-by","sorting-order"])),l(Y,{links:e.links,onPage:e.fetchItems},null,8,["links","onPage"]),l(Z,{show:e.showCreate,"onUpdate:show":t[6]||(t[6]=s=>e.showCreate=s),employees:e.employees,categories:e.categories,onPush:e.push},null,8,["show","employees","categories","onPush"])]),_:1},8,["busy"])}const rt=D(qe,[["render",Ke],["__scopeId","data-v-6449a9be"]]);export{rt as default};
