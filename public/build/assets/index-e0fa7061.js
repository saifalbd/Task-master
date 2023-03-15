import{a as A}from"./app-layout-b5cf8580.js";import{_ as O}from"./PageTitleBox-aaded2a2.js";import{P as T}from"./Pagination-fc4f803b.js";import{_ as b,r as l,f as x,h as P,w as v,b as n,i as u,e as o,M as R,N,O as j,P as F,j as H}from"./app-44c844f3.js";import{F as E}from"./FormDialog-b0635048.js";import{r as U}from"./index-261a8ab4.js";import{C as I}from"./CreateButton-6467a51e.js";import{R as L}from"./RemoveEditButton-d8b70e6f.js";import{u as S}from"./useToast-c6130b9b.js";const q={components:{FormDialog:E},props:{show:{type:Boolean,default:!1}},setup(r,{emit:e}){let c=l(!1);const t=l(null);let m=l(""),_=route("department.store");return{props:r,form:t,emit:e,rs:U,save:async()=>{if(!await t.value.validate())return null;try{const{data:d}=await axios.post(_,{title:m.value});e("push",addProtos(d,{action:!0,showEdit:!1}))}catch(d){console.error(d),validErorrs(d)}},title:m,busy:c}}},M={class:"layout gutter--md"},z={class:"row align-content--center"},D={class:"flex xs12"};function G(r,e,c,t,m,_){const f=o("va-input"),i=o("va-form"),d=o("form-dialog");return x(),P(d,{show:t.props.show,"onUpdate:show":e[1]||(e[1]=s=>t.emit("update:show",s)),busy:t.busy,title:"Create Department",onAdd:t.save},{default:v(()=>[n(i,{ref:"form"},{default:v(()=>[u("div",M,[u("div",z,[u("div",D,[n(f,{modelValue:t.title,"onUpdate:modelValue":e[0]||(e[0]=s=>t.title=s),label:"Title",placeholder:"Title Here",rules:t.rs("title",!0)},null,8,["modelValue","rules"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const J=b(q,[["render",G]]),K={components:{FormDialog:E},props:{show:{type:Boolean,default:!1},item:{type:Object,required:!0}},setup(r,{emit:e}){let c=l(!1);const t=l(null);let m=l(r.item),_=l(r.item.title);return R(r.item,i=>{m.value=i,_.value=i.title}),{props:r,form:t,emit:e,save:async()=>{let i=route("department.update",{department:m.value.id});if(!await t.value.validate())return null;try{const{data:s}=await axios.put(i,{title:_.value});e("replace",addProtos(s,{action:!0,showEdit:!1}))}catch(s){N(s)}},rs:U,title:_,busy:c}}},Q={class:"layout gutter--md"},W={class:"row align-content--center"},X={class:"flex xs12"};function Y(r,e,c,t,m,_){const f=o("va-input"),i=o("va-form"),d=o("form-dialog");return x(),P(d,{show:t.props.show,"onUpdate:show":e[1]||(e[1]=s=>t.emit("update:show",s)),busy:t.busy,title:"Edit Department","is-edit":"",onAdd:t.save},{default:v(()=>[n(i,{ref:"form"},{default:v(()=>[u("div",Q,[u("div",W,[u("div",X,[n(f,{modelValue:t.title,"onUpdate:modelValue":e[0]||(e[0]=s=>t.title=s),label:"Title",placeholder:"Title Here",rules:t.rs("title",!0)},null,8,["modelValue","rules"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const Z=b(K,[["render",Y]]);const $={components:{AppLayout:A,PageTitleBox:O,Pagination:T,Create:J,Edit:Z,CreateButton:I,RemoveEditButton:L},setup(){const r=l(!1),e=S(),c=l([]),t=l(!1),m=l([]),_=l(10),f=l("title"),i=[{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],d=l("asc"),s=async p=>{r.value=!0;const h=route("department.index",{perPage:_.value,page:p}),{data:y}=await axios.get(h);m.value=y.links,c.value=addProtos(y.data,{action:!0,showEdit:!1}),r.value=!1};return s(1),{showCreate:t,perPage:_,sortingOrder:d,items:c,columns:i,sortBy:f,push:p=>{t.value=!1,c.value.push(p)},replace:(p,h)=>{t.value=!1,c.value.splice(h,1,p)},fetchItems:s,remove:async(p,h)=>{if(!await j(p,"department"))return null;try{const g=route("department.destroy",{department:p.id});await axios.delete(g),c.value.splice(h,1),F(e)}catch(g){console.log(g)}},links:m,busy:r}}},tt={class:"row mt-4"},et={class:"flex md6"},ot={class:"item"},st={class:"flex lg6"},at={class:"item right"};function nt(r,e,c,t,m,_){const f=o("create-button"),i=o("page-title-box"),d=o("va-select"),s=o("va-icon"),C=o("va-input"),k=o("edit"),V=o("remove-edit-button"),p=o("va-data-table"),h=o("pagination"),y=o("create"),g=o("app-layout");return x(),P(g,{busy:t.busy},{default:v(()=>[u("div",null,[n(i,{title:"Departments"},{default:v(()=>[n(f,{title:"Add department",onClick:e[0]||(e[0]=a=>t.showCreate=!0)})]),_:1})]),u("div",tt,[u("div",et,[u("div",ot,[n(d,{class:"flex mb-2 md6",label:"Per Page",modelValue:t.perPage,"onUpdate:modelValue":e[1]||(e[1]=a=>t.perPage=a),options:[10,20,30,40,50]},null,8,["modelValue"])])]),u("div",st,[u("div",at,[n(C,{class:"flex mb-2 md6",label:"Search"},{prepend:v(()=>[n(s,{class:"material-icons"},{default:v(()=>[H("search")]),_:1})]),_:1})])])]),n(p,{items:t.items,columns:t.columns,hoverable:!0,"sort-by":t.sortBy,"onUpdate:sortBy":e[2]||(e[2]=a=>t.sortBy=a),"sorting-order":t.sortingOrder,"onUpdate:sortingOrder":e[3]||(e[3]=a=>t.sortingOrder=a)},{"cell(action)":v(({rowData:a,rowIndex:B})=>[n(V,{onEditClick:w=>a.showEdit=!0,onRemoveClick:w=>t.remove(a,B)},{default:v(()=>[n(k,{show:a.showEdit,"onUpdate:show":w=>a.showEdit=w,item:a,onReplace:w=>t.replace(w,B)},null,8,["show","onUpdate:show","item","onReplace"])]),_:2},1032,["onEditClick","onRemoveClick"])]),_:1},8,["items","columns","sort-by","sorting-order"]),n(h,{links:t.links,onPage:t.fetchItems},null,8,["links","onPage"]),n(y,{show:t.showCreate,"onUpdate:show":e[4]||(e[4]=a=>t.showCreate=a),onPush:t.push},null,8,["show","onPush"])]),_:1},8,["busy"])}const vt=b($,[["render",nt],["__scopeId","data-v-2a576024"]]);export{vt as default};
