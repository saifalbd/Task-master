import{A as w,_ as j}from"./PageTitleBox-9be017fa.js";import{P as C}from"./Pagination-53b45834.js";import{R as O}from"./RemoveEditButton-08b4a9fb.js";import{S}from"./statusBtn-bf1e4598.js";import{_ as A,r,g as k,h as n,u as E,i as o,o as v,a as l,j as a,b as h,c as D,k as I,F as L,t as N}from"./app-fb8c1635.js";const R={components:{AppLayout:w,PageTitleBox:j,Pagination:C,RemoveEditButton:O,StatusBtn:S},setup(){const _=r(!0),s=E(),m=r([]),t=r([]),u=r(10),f=r("title"),p=[{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"manager.name",label:"Manager",sortable:!0},{key:"category.title",label:"Category",sortable:!0},{key:"start",label:"Start",sortable:!0},{key:"end",label:"Dead Line",sortable:!0},{key:"team.title",label:"Team",sortable:!0},{key:"status",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],g=r("asc"),c=async b=>{try{const i=route("my.project.index",{perPage:u.value,page:b}),{data:d}=await axios.get(i);t.value=d.links,m.value=addProtos(d.data,{action:!0,showEdit:!1})}catch(i){console.error(i)}_.value=!1};return c(1),{router:s,perPage:u,sortingOrder:g,items:m,columns:p,sortBy:f,fetchItems:c,links:t,busy:_}}},T={class:"row mt-4"},U={class:"flex md6"},F={class:"item"},z={class:"flex lg6"},M={class:"item right"};function q(_,s,m,t,u,f){const p=o("page-title-box"),g=o("va-select"),c=o("va-icon"),b=o("va-input"),i=o("va-chip"),d=o("status-btn"),x=o("remove-edit-button"),P=o("va-data-table"),B=o("pagination"),V=o("app-layout");return v(),k(V,{busy:t.busy},{default:n(()=>[l("div",null,[a(p,{title:"Projects"})]),l("div",T,[l("div",U,[l("div",F,[a(g,{class:"flex mb-2 md6",label:"Per Page",modelValue:t.perPage,"onUpdate:modelValue":s[0]||(s[0]=e=>t.perPage=e),options:[10,20,30,40,50]},null,8,["modelValue"])])]),l("div",z,[l("div",M,[a(b,{class:"flex mb-2 md6",label:"Search"},{prepend:n(()=>[a(c,{class:"material-icons"},{default:n(()=>[h("search")]),_:1})]),_:1})])])]),a(P,{items:t.items,columns:t.columns,hoverable:!0,"sort-by":t.sortBy,"onUpdate:sortBy":s[1]||(s[1]=e=>t.sortBy=e),"sorting-order":t.sortingOrder,"onUpdate:sortingOrder":s[2]||(s[2]=e=>t.sortingOrder=e)},{"cell(members)":n(({rowData:e})=>[(v(!0),D(L,null,I(e.members,y=>(v(),k(i,{size:"small",key:y.id},{default:n(()=>[h(N(y.name),1)]),_:2},1024))),128))]),"cell(status)":n(({value:e})=>[a(d,{status:e},null,8,["status"])]),"cell(action)":n(({rowData:e})=>[a(x,{isView:!0,onViewClick:y=>t.router.push({name:"job.project.show",params:{id:e.id}}),isDelete:!1,isEdit:!1},null,8,["onViewClick"])]),_:1},8,["items","columns","sort-by","sorting-order"]),a(B,{links:t.links,onPage:t.fetchItems},null,8,["links","onPage"])]),_:1},8,["busy"])}const W=A(R,[["render",q],["__scopeId","data-v-c704561d"]]);export{W as default};