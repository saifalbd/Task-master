import{A,_ as T}from"./PageTitleBox-9be017fa.js";import{P as O}from"./Pagination-53b45834.js";import{_ as b,r as l,o as x,g as C,h as v,j as n,a as u,i as o,C as R,D as N,E as j,G as F,b as H}from"./app-fb8c1635.js";import{F as V,r as U,u as I}from"./index-6f6f3ed4.js";import{C as S}from"./CreateButton-a3f51907.js";import{R as q}from"./RemoveEditButton-08b4a9fb.js";const G={components:{FormDialog:V},props:{show:{type:Boolean,default:!1}},setup(r,{emit:t}){let d=l(!1);const e=l(null);let _=l(""),m=route("category.store");return{props:r,form:e,emit:t,rs:U,save:async()=>{if(!await e.value.validate())return null;try{const{data:c}=await axios.post(m,{title:_.value});t("push",addProtos(c,{action:!0,showEdit:!1}))}catch(c){console.error(c),validErorrs(c)}},title:_,busy:d}}},L={class:"layout gutter--md"},z={class:"row align-content--center"},J={class:"flex xs12"};function K(r,t,d,e,_,m){const f=o("va-input"),i=o("va-form"),c=o("form-dialog");return x(),C(c,{show:e.props.show,"onUpdate:show":t[1]||(t[1]=s=>e.emit("update:show",s)),busy:e.busy,title:"Create Cetegory",onAdd:e.save},{default:v(()=>[n(i,{ref:"form"},{default:v(()=>[u("div",L,[u("div",z,[u("div",J,[n(f,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=s=>e.title=s),label:"Title",placeholder:"Title Here",rules:e.rs("title",!0)},null,8,["modelValue","rules"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const M=b(G,[["render",K]]),Q={components:{FormDialog:V},props:{show:{type:Boolean,default:!1},item:{type:Object,required:!0}},setup(r,{emit:t}){let d=l(!1);const e=l(null);let _=l(r.item),m=l(r.item.title);return R(r.item,i=>{_.value=i,m.value=i.title}),{props:r,form:e,emit:t,save:async()=>{let i=route("category.update",{category:_.value.id});if(!await e.value.validate())return null;try{const{data:s}=await axios.put(i,{title:m.value});t("replace",addProtos(s,{action:!0,showEdit:!1}))}catch(s){N(s)}},rs:U,title:m,busy:d}}},W={class:"layout gutter--md"},X={class:"row align-content--center"},Y={class:"flex xs12"};function Z(r,t,d,e,_,m){const f=o("va-input"),i=o("va-form"),c=o("form-dialog");return x(),C(c,{show:e.props.show,"onUpdate:show":t[1]||(t[1]=s=>e.emit("update:show",s)),busy:e.busy,title:"Edit Cetegory","is-edit":"",onAdd:e.save},{default:v(()=>[n(i,{ref:"form"},{default:v(()=>[u("div",W,[u("div",X,[u("div",Y,[n(f,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=s=>e.title=s),label:"Title",placeholder:"Title Here",rules:e.rs("title",!0)},null,8,["modelValue","rules"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const D=b(Q,[["render",Z]]);const $={components:{AppLayout:A,PageTitleBox:T,Pagination:O,Create:M,Edit:D,CreateButton:S,RemoveEditButton:q},setup(){const r=l(!1),t=I(),d=l([]),e=l(!1),_=l([]),m=l(10),f=l("title"),i=[{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],c=l("asc"),s=async p=>{r.value=!0;const g=route("category.index",{perPage:m.value,page:p}),{data:h}=await axios.get(g);_.value=h.links,d.value=addProtos(h.data,{action:!0,showEdit:!1}),r.value=!1};return s(1),{showCreate:e,perPage:m,sortingOrder:c,items:d,columns:i,sortBy:f,push:p=>{e.value=!1,d.value.push(p)},replace:(p,g)=>{e.value=!1,d.value.splice(g,1,p)},fetchItems:s,remove:async(p,g)=>{if(!await j(p,"Category"))return null;try{const y=route("category.destroy",{category:p.id});await axios.delete(y),d.value.splice(g,1),F(t)}catch(y){console.log(y)}},links:_,busy:r}}},ee={class:"row mt-4"},te={class:"flex md6"},oe={class:"item"},se={class:"flex lg6"},ae={class:"item right"};function ne(r,t,d,e,_,m){const f=o("create-button"),i=o("page-title-box"),c=o("va-select"),s=o("va-icon"),P=o("va-input"),k=o("edit"),E=o("remove-edit-button"),p=o("va-data-table"),g=o("pagination"),h=o("create"),y=o("app-layout");return x(),C(y,{busy:e.busy},{default:v(()=>[u("div",null,[n(i,{title:"Categories"},{default:v(()=>[n(f,{title:"Add Category",onClick:t[0]||(t[0]=a=>e.showCreate=!0)})]),_:1})]),u("div",ee,[u("div",te,[u("div",oe,[n(c,{class:"flex mb-2 md6",label:"Per Page",modelValue:e.perPage,"onUpdate:modelValue":t[1]||(t[1]=a=>e.perPage=a),options:[10,20,30,40,50]},null,8,["modelValue"])])]),u("div",se,[u("div",ae,[n(P,{class:"flex mb-2 md6",label:"Search"},{prepend:v(()=>[n(s,{class:"material-icons"},{default:v(()=>[H("search")]),_:1})]),_:1})])])]),n(p,{items:e.items,columns:e.columns,hoverable:!0,"sort-by":e.sortBy,"onUpdate:sortBy":t[2]||(t[2]=a=>e.sortBy=a),"sorting-order":e.sortingOrder,"onUpdate:sortingOrder":t[3]||(t[3]=a=>e.sortingOrder=a)},{"cell(action)":v(({rowData:a,rowIndex:B})=>[n(E,{onEditClick:w=>a.showEdit=!0,onRemoveClick:w=>e.remove(a,B)},{default:v(()=>[n(k,{show:a.showEdit,"onUpdate:show":w=>a.showEdit=w,item:a,onReplace:w=>e.replace(w,B)},null,8,["show","onUpdate:show","item","onReplace"])]),_:2},1032,["onEditClick","onRemoveClick"])]),_:1},8,["items","columns","sort-by","sorting-order"]),n(g,{links:e.links,onPage:e.fetchItems},null,8,["links","onPage"]),n(h,{show:e.showCreate,"onUpdate:show":t[4]||(t[4]=a=>e.showCreate=a),onPush:e.push},null,8,["show","onPush"])]),_:1},8,["busy"])}const _e=b($,[["render",ne],["__scopeId","data-v-c68ee0e4"]]);export{_e as default};