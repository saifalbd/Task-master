import{a as R}from"./app-layout-5035e93c.js";import{_ as T}from"./PageTitleBox-2c2a24fa.js";import{P as O}from"./Pagination-84119699.js";import{_ as x,r as l,f as C,h as P,w as m,b as a,i as d,e as o,P as I,Q as N,R as S,S as j,j as F}from"./app-6441ea8f.js";import{F as B}from"./FormDialog-52448d67.js";import{r as A}from"./index-d2820a07.js";import{C as H}from"./CreateButton-55d26947.js";import{R as L}from"./RemoveEditButton-0508b1ca.js";import{u as q}from"./useToast-31be6915.js";const D={components:{FormDialog:B},props:{show:{type:Boolean,default:!1}},setup(n,{emit:t}){let c=l(!1);const e=l(null);let u=l(""),_=route("category.store");return{props:n,form:e,emit:t,rs:A,save:async()=>{if(!await e.value.validate())return null;try{const{data:i}=await axios.post(_,{title:u.value});t("push",addProtos(i,{action:!0,showEdit:!1}))}catch(i){console.error(i),validErorrs(i)}},title:u,busy:c}}},Q={class:"layout gutter--md"},z={class:"row align-content--center"},G={class:"flex xs12"};function J(n,t,c,e,u,_){const v=o("va-input"),r=o("va-form"),i=o("form-dialog");return C(),P(i,{show:e.props.show,"onUpdate:show":t[1]||(t[1]=s=>e.emit("update:show",s)),busy:e.busy,title:"Create Cetegory",onAdd:e.save},{default:m(()=>[a(r,{ref:"form"},{default:m(()=>[d("div",Q,[d("div",z,[d("div",G,[a(v,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=s=>e.title=s),label:"Title",placeholder:"Title Here",rules:e.rs("title",!0)},null,8,["modelValue","rules"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const K=x(D,[["render",J]]),M={components:{FormDialog:B},props:{show:{type:Boolean,default:!1},item:{type:Object,required:!0}},setup(n,{emit:t}){let c=l(!1);const e=l(null);let u=l(n.item),_=l(n.item.title);return I(n.item,r=>{u.value=r,_.value=r.title}),{props:n,form:e,emit:t,save:async()=>{let r=route("category.update",{category:u.value.id});if(!await e.value.validate())return null;try{const{data:s}=await axios.put(r,{title:_.value});t("replace",addProtos(s,{action:!0,showEdit:!1}))}catch(s){N(s)}},rs:A,title:_,busy:c}}},W={class:"layout gutter--md"},X={class:"row align-content--center"},Y={class:"flex xs12"};function Z(n,t,c,e,u,_){const v=o("va-input"),r=o("va-form"),i=o("form-dialog");return C(),P(i,{show:e.props.show,"onUpdate:show":t[1]||(t[1]=s=>e.emit("update:show",s)),busy:e.busy,title:"Edit Cetegory","is-edit":"",onAdd:e.save},{default:m(()=>[a(r,{ref:"form"},{default:m(()=>[d("div",W,[d("div",X,[d("div",Y,[a(v,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=s=>e.title=s),label:"Title",placeholder:"Title Here",rules:e.rs("title",!0)},null,8,["modelValue","rules"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const $=x(M,[["render",Z]]);const ee={components:{AppLayout:R,PageTitleBox:T,Pagination:O,Create:K,Edit:$,CreateButton:H,RemoveEditButton:L},setup(){const n=l(!1),t=q(),c=l([]),e=l(!1),u=l([]),_=l(10),v=l("title"),r=[{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],i=l("asc"),s=async p=>{n.value=!0;const h=route("category.index",{perPage:_.value,page:p}),{data:g}=await axios.get(h);u.value=g.links,c.value=addProtos(g.data,{action:!0,showEdit:!1}),n.value=!1};return s(1),{showCreate:e,perPage:_,sortingOrder:i,items:c,columns:r,sortBy:v,push:p=>{e.value=!1,c.value.push(p)},replace:(p,h)=>{e.value=!1,c.value.splice(h,1,p)},fetchItems:s,remove:async(p,h)=>{if(!await S(p,"Category"))return null;try{const y=route("category.destroy",{category:p.id});await axios.delete(y),c.value.splice(h,1),j(t)}catch(y){console.log(y)}},links:u,busy:n}}},te={class:"row mt-4"},oe={class:"flex md6"},ae={class:"item"},se={class:"flex lg6"},le={class:"item right"};function ne(n,t,c,e,u,_){const v=o("create-button"),r=o("page-title-box"),i=o("va-select"),s=o("va-icon"),k=o("va-input"),b=o("el-table-column"),V=o("edit"),p=o("remove-edit-button"),h=o("el-table"),g=o("pagination"),y=o("create"),U=o("app-layout");return C(),P(U,{busy:e.busy},{default:m(()=>[d("div",null,[a(r,{title:"Categories"},{default:m(()=>[a(v,{title:"Add Category",onClick:t[0]||(t[0]=f=>e.showCreate=!0)})]),_:1})]),d("div",te,[d("div",oe,[d("div",ae,[a(i,{class:"flex mb-2 md6",label:"Per Page",modelValue:e.perPage,"onUpdate:modelValue":t[1]||(t[1]=f=>e.perPage=f),options:[10,20,30,40,50]},null,8,["modelValue"])])]),d("div",se,[d("div",le,[a(k,{class:"flex mb-2 md6",label:"Search"},{prepend:m(()=>[a(s,{class:"material-icons"},{default:m(()=>[F("search")]),_:1})]),_:1})])])]),a(h,{data:e.items,border:"",style:{width:"100%"}},{default:m(()=>[a(b,{prop:"id",label:"serial"}),a(b,{prop:"title",label:"title"}),a(b,{fixed:"right",label:"Operations",width:"120"},{default:m(({row:f,$index:E})=>[a(p,{onEditClick:w=>f.showEdit=!0,onRemoveClick:w=>e.remove(f,E)},{default:m(()=>[a(V,{show:f.showEdit,"onUpdate:show":w=>f.showEdit=w,item:f,onReplace:w=>e.replace(w,E)},null,8,["show","onUpdate:show","item","onReplace"])]),_:2},1032,["onEditClick","onRemoveClick"])]),_:1})]),_:1},8,["data"]),a(g,{links:e.links,onPage:e.fetchItems},null,8,["links","onPage"]),a(y,{show:e.showCreate,"onUpdate:show":t[2]||(t[2]=f=>e.showCreate=f),onPush:e.push},null,8,["show","onPush"])]),_:1},8,["busy"])}const ve=x(ee,[["render",ne],["__scopeId","data-v-85c5f6e7"]]);export{ve as default};