import{d as B,s as O,v as q,x as G,y as J,z as K,A as Q,B as W,C as X,_ as M,f as h,c as U,b as t,w as n,u as V,e as a,p as T,q as j,i as s,D as L,r as N,h as A,t as S,j as C,F as P,n as E,G as z,m as D,H as x,I as Y,J as F,K as Z,L as ee,M as I}from"./app-15ad5095.js";const te=B({components:{HomeFilled:O,Collection:q,Management:G,Files:J,Connection:K,Avatar:Q,Position:W,User:X},setup(){const e=V();return{go:i=>{e.push(i)}}}}),v=e=>(T("data-v-d644cbda"),e=e(),j(),e),oe={class:"asside-box"},ne=v(()=>s("b",null,"Home",-1)),se=v(()=>s("b",null,"Contacts",-1)),ae=v(()=>s("b",null,"Employees",-1)),le=v(()=>s("b",null,"Employees",-1)),ie=v(()=>s("b",null,"Department",-1)),de=v(()=>s("b",null,"Designation",-1)),ue=v(()=>s("b",null,"Clients",-1)),re=v(()=>s("b",null,"Category",-1)),ce=v(()=>s("b",null,"Teams",-1)),_e=v(()=>s("b",null,"Projects",-1)),fe=v(()=>s("b",null,"Assignments",-1)),me=v(()=>s("b",null,"jobs",-1)),pe=v(()=>s("b",null,"Tasks",-1)),ve=v(()=>s("b",null,"Assignments",-1)),he=v(()=>s("b",null,"jobs",-1)),ge=v(()=>s("b",null,"toDoList",-1));function $e(e,o,i,f,b,y){const u=a("home-filled"),l=a("el-icon"),d=a("el-menu-item"),r=a("avatar"),c=a("connection"),g=a("position"),m=a("el-sub-menu"),p=a("user"),w=a("management"),k=a("files"),$=a("el-menu");return h(),U("div",oe,[t($,{"default-active":"1"},{default:n(()=>[t(d,{index:"1",onClick:o[0]||(o[0]=_=>e.go({name:"home"}))},{default:n(()=>[t(l,null,{default:n(()=>[t(u)]),_:1}),ne]),_:1}),t(d,{index:"2",onClick:o[1]||(o[1]=_=>e.go({name:"contact"}))},{default:n(()=>[t(l,null,{default:n(()=>[t(r)]),_:1}),se]),_:1}),t(m,{index:"2"},{title:n(()=>[t(l,null,{default:n(()=>[t(r)]),_:1}),ae]),default:n(()=>[t(d,{index:"2-1",onClick:o[2]||(o[2]=_=>e.go({name:"employee"}))},{default:n(()=>[t(l,null,{default:n(()=>[t(r)]),_:1}),le]),_:1}),t(d,{index:"2-2",onClick:o[3]||(o[3]=_=>e.go({name:"department"}))},{default:n(()=>[t(l,null,{default:n(()=>[t(c)]),_:1}),ie]),_:1}),t(d,{index:"2-3",onClick:o[4]||(o[4]=_=>e.go({name:"designation"}))},{default:n(()=>[t(l,null,{default:n(()=>[t(g)]),_:1}),de]),_:1})]),_:1}),t(d,{index:"3",onClick:o[5]||(o[5]=_=>e.go({name:"client"}))},{default:n(()=>[t(l,null,{default:n(()=>[t(p)]),_:1}),ue]),_:1}),t(d,{index:"4",onClick:o[6]||(o[6]=_=>e.go({name:"category"}))},{default:n(()=>[t(l,null,{default:n(()=>[t(c)]),_:1}),re]),_:1}),t(d,{index:"7",onClick:o[7]||(o[7]=_=>e.go({name:"team"}))},{default:n(()=>[t(l,null,{default:n(()=>[t(w)]),_:1}),ce]),_:1}),t(m,{index:"8"},{title:n(()=>[t(l,null,{default:n(()=>[t(k)]),_:1}),_e]),default:n(()=>[t(d,{index:"8-1",onClick:o[8]||(o[8]=_=>e.go({name:"project"}))},{default:n(()=>[fe]),_:1}),t(d,{index:"8-2",onClick:o[9]||(o[9]=_=>e.go({name:"job.project"}))},{default:n(()=>[me]),_:1})]),_:1}),t(m,{index:"9"},{title:n(()=>[t(l,null,{default:n(()=>[t(k)]),_:1}),pe]),default:n(()=>[t(d,{index:"9-1",onClick:o[10]||(o[10]=_=>e.go({name:"task"}))},{default:n(()=>[ve]),_:1}),t(d,{index:"9-2",onClick:o[11]||(o[11]=_=>e.go({name:"job.task"}))},{default:n(()=>[he]),_:1})]),_:1}),t(d,{index:"10",onClick:o[12]||(o[12]=_=>e.go({name:"toDoList"}))},{default:n(()=>[t(l,null,{default:n(()=>[t(u)]),_:1}),ge]),_:1})]),_:1})])}const be=M(te,[["render",$e],["__scopeId","data-v-d644cbda"]]),R=L("notifications",{state(){return{count:0,notifications:[],showModal:!1}},actions:{toggleNodal(e){this.showModal=e},addNotify(e){this.notifications.unshift(e),this.count++},notificationsFetch(){axios.get(route("notification")).then(({data:e})=>{this.notifications=e,this.count=e.length})}},getters:{taskNotifications(){return this.notifications.filter(e=>e.type=="TaskAssigned")},employeeAssignedNotifications(){return this.notifications.filter(e=>e.type=="EmployeeAssigned")}}});const ye=B({model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!0}},setup(e,{emit:o}){const i=R(),f=V(),b=N(!1),y="Notifications",u=()=>{o("update:show",!1)};return{title:y,busy:b,props:e,close:u,go:d=>{u(),f.push(d)},notifyStore:i}}}),ke={class:"layout va-gutter-1"},Ce={class:"row"},we={class:"flex xs12"},Ue={class:"item mb-4"},Se={class:"form-title"},Ne={class:"text"},Ae={key:0,class:"flex xs12"},Be=["src"],Me={key:1,class:"flex xs12"},ze={class:"flex xs12"},Ie={class:"item actions-btns"};function Ve(e,o,i,f,b,y){const u=a("va-icon"),l=a("va-list-label"),d=a("va-avatar"),r=a("va-list-item-section"),c=a("va-list-item-label"),g=a("va-list-item"),m=a("va-list"),p=a("va-button"),w=a("va-inner-loading"),k=a("va-modal");return h(),A(k,{modelValue:e.show,"onUpdate:modelValue":o[0]||(o[0]=$=>e.show=$),fullscreen:!1,"hide-default-actions":"","no-outside-dismiss":"",class:"form-sceen"},{default:n(()=>[t(w,{loading:e.busy},{default:n(()=>[s("div",ke,[s("div",Ce,[s("div",we,[s("div",Ue,[s("div",Se,[t(u,{name:"notifications"}),s("span",Ne,S(e.title),1)])])]),e.notifyStore.taskNotifications.length?(h(),U("div",Ae,[t(m,null,{default:n(()=>[t(l,null,{default:n(()=>[C(" TaskNotifications ")]),_:1}),(h(!0),U(P,null,E(e.notifyStore.taskNotifications,($,_)=>(h(),A(g,{class:"list__item",key:_,onClick:gt=>e.go({name:"job.task.show",params:{id:$.data.task_id}})},{default:n(()=>[t(r,{avatar:""},{default:n(()=>[t(d,null,{default:n(()=>[s("img",{src:$.fromUser.avatar.url},null,8,Be)]),_:2},1024)]),_:2},1024),t(r,null,{default:n(()=>[t(c,null,{default:n(()=>[C(S($.fromUser.name),1)]),_:2},1024),t(c,{lines:_+1},{default:n(()=>[C(S($.data.message),1)]),_:2},1032,["lines"])]),_:2},1024),t(r,{icon:""},{default:n(()=>[t(u,{name:"remove_red_eye",color:"background-tertiary"})]),_:1})]),_:2},1032,["onClick"]))),128))]),_:1})])):z("",!0),e.notifyStore.employeeAssignedNotifications.length?(h(),U("div",Me,[t(m,null,{default:n(()=>[t(l,null,{default:n(()=>[C(" Employee Assigned Notifications ")]),_:1}),(h(!0),U(P,null,E(e.notifyStore.employeeAssignedNotifications,($,_)=>(h(),A(g,{class:"list__item",key:_},{default:n(()=>[t(r,{avatar:""},{default:n(()=>[t(d)]),_:1}),t(r,null,{default:n(()=>[t(c,null,{default:n(()=>[C(S($.fromUser.name),1)]),_:2},1024),t(c,{lines:_+1},{default:n(()=>[C(S($.data.message),1)]),_:2},1032,["lines"])]),_:2},1024),t(r,{icon:""},{default:n(()=>[t(u,{name:"remove_red_eye",color:"background-tertiary"})]),_:1})]),_:2},1024))),128))]),_:1})])):z("",!0),s("div",ze,[s("div",Ie,[t(p,{color:"danger",size:"small",onClick:e.close},{default:n(()=>[t(u,{class:"material-icons"},{default:n(()=>[C("close")]),_:1}),C(" Close")]),_:1},8,["onClick"])])])])])]),_:1},8,["loading"])]),_:1},8,["modelValue"])}const Te=M(ye,[["render",Ve],["__scopeId","data-v-cc68bfd0"]]);const je=B({model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!0}},setup(e,{emit:o}){const i=D(),f=N(!1),b="Profile Thumbnil";let y=N(!1),u=N(""),l=N(null);return{title:b,attach:l,hasThumb:y,thumbnil:u,fileAded:g=>{let p=g.target.files;if(p.length){let w=p[0];l.value=w;let k=new FileReader;k.onload=()=>{let $=k.result;u.value=$,y.value=!0},k.readAsDataURL(w)}},update:async()=>{try{const g=route("avatar",{},!1),m=new FormData;l.value&&m.append("avatar",l.value);const{data:p}=await axios.post(g,m);i.updateAvatar(p),i.hideProfileModal()}catch(g){console.error(g)}},busy:f,props:e,close:()=>{o("update:show",!1)}}}}),Pe=e=>(T("data-v-8d7b5baf"),e=e(),j(),e),Ee={class:"layout va-gutter-1"},Fe={class:"row"},Le={class:"flex xs12"},De={class:"item mb-4"},xe={class:"form-title"},Re={class:"text"},He={class:"flex xs12"},Oe={class:"row"},qe={class:"flex xs12"},Ge={key:0,class:"img-box"},Je=["src"],Ke={class:"input-box"},Qe={class:"va-file-upload va-file-upload--dropzone",style:{"background-color":"rgba(21, 79, 193, 0.08)"}},We=Pe(()=>s("div",{class:"va-file-upload__field"},[s("div",{class:"va-file-upload__field__text"}," Click Here And Upload File ")],-1)),Xe={class:"flex xs12"},Ye={class:"item actions-btns"};function Ze(e,o,i,f,b,y){const u=a("va-icon"),l=a("va-button"),d=a("va-inner-loading"),r=a("va-modal");return h(),A(r,{modelValue:e.show,"onUpdate:modelValue":o[1]||(o[1]=c=>e.show=c),fullscreen:!1,"hide-default-actions":"","no-outside-dismiss":"",class:"form-sceen"},{default:n(()=>[t(d,{loading:e.busy},{default:n(()=>[s("div",Ee,[s("div",Fe,[s("div",Le,[s("div",De,[s("div",xe,[t(u,{name:"notifications"}),s("span",Re,S(e.title),1)])])]),s("div",He,[s("div",Oe,[s("div",qe,[s("div",{class:x(["tumb-card",{hasThumb:e.hasThumb}])},[e.hasThumb?(h(),U("div",Ge,[s("img",{src:e.thumbnil,alt:""},null,8,Je)])):z("",!0),s("div",Ke,[s("div",Qe,[We,s("input",{type:"file",class:"va-file-upload__field__input",tabindex:"-1","aria-hidden":"true",onChange:o[0]||(o[0]=(...c)=>e.fileAded&&e.fileAded(...c))},null,32)])])],2)])])]),s("div",Xe,[s("div",Ye,[t(l,{color:"info",onClick:e.update},{default:n(()=>[C(" Skip")]),_:1},8,["onClick"]),t(l,{color:"success",onClick:e.update},{default:n(()=>[C(" Next")]),_:1},8,["onClick"])])])])])]),_:1},8,["loading"])]),_:1},8,["modelValue"])}const et=M(je,[["render",Ze],["__scopeId","data-v-8d7b5baf"]]),tt=L("chat",{state(){return{users:[],totalUnreadCount:0}},actions:{async fetchChatUsers(e){try{const{data:o}=await axios.get(route("chatUsers"));this.users=o.map((i,f)=>(i.active=!f,i.messages=[],i)),e(this.users)}catch(o){console.error(o)}},increaseTotalUnread(e){this.totalUnreadCount=+e},increaseUnread(e,o){this.users=this.users.map(i=>(i.id==e&&(i.unReadCount=i.unReadCount+o),i)),this.totalUnreadCount=this.totalUnreadCount+o,Y()},listen(e){Echo.join("chat").joining(o=>{axios.put(route("online",{user:o.id}))}).leaving(o=>{axios.put(route("offline",{user:o.id}),{})}).listen("UserOnline",o=>{const i=this.users.find(f=>f.id==o.id);i&&(i.isOnline=!0)}).listen("UserOffline",o=>{const i=this.users.find(f=>f.id==o.id);i&&(i.isOnline=!1)}).listen("ChatEvent",o=>{e(o)})}}}),ot=B({model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!0}},setup(e,{emit:o}){return{props:e}}}),nt=s("div",null,"Chat modal",-1);function st(e,o,i,f,b,y){const u=a("va-inner-loading"),l=a("va-modal");return h(),A(l,{modelValue:e.show,"onUpdate:modelValue":o[0]||(o[0]=d=>e.show=d),fullscreen:!0,"hide-default-actions":"","no-outside-dismiss":""},{default:n(()=>[t(u,{loading:e.busy},{default:n(()=>[nt]),_:1},8,["loading"])]),_:1},8,["modelValue"])}const at=M(ot,[["render",st]]);const lt=B({components:{AsideBar:be,NotificationModel:Te,ProfileEditModal:et,ChatModal:at},props:{title:{type:String,default:"title"},showInfoBar:{type:Boolean,default:!1},busy:{type:Boolean,default:!0}},setup(e){const o=D(),i=tt(),f=F(()=>i.totalUnreadCount);let b=o.token,y=o.user,u=o.avatar,l=F(()=>o.showProfileModal),d=N(!1);b&&(window.Echo.connector.options.auth.headers.Authorization=`Bearer ${b}`);const r=V(),c=R();c.notificationsFetch();const g=()=>{ee(),r.push({name:"login"})},m=N(!1),p=()=>{i.users.length?r.push({name:"chat"}):(m.value=!0,i.fetchChatUsers(()=>{m.value=!1,r.push({name:"chat"})}))},w=()=>{r.push({name:"profile"})};return Z(()=>{axios.get(route("chatUnreadcount")).then(({data:k})=>{i.increaseTotalUnread(k)})}),{avatar:u,props:e,notifyStore:c,user:y,showProfileModal:l,showChatModal:d,chatUnreadcount:f,chatIconBusy:m,logout:g,goChat:p,goProfile:w}}}),H=e=>(T("data-v-d8372b02"),e=e(),j(),e),it={class:"main-layout"},dt={class:"info-bar-body"},ut={class:"asside"},rt={class:"main-content"},ct={class:"inner"},_t={class:"top-nav"},ft=H(()=>s("div",{class:"page-title"},"Task Master",-1)),mt={class:"right-side"},pt=H(()=>s("span",{class:"mx-2"},"Logout",-1)),vt={class:"page-content"};function ht(e,o,i,f,b,y){const u=a("AsideBar"),l=a("va-icon"),d=a("va-avatar"),r=a("va-badge"),c=a("va-inner-loading"),g=a("va-button"),m=a("NotificationModel");return h(),U("div",it,[s("div",{class:x(["info-bar",{show:e.props.showInfoBar}])},[s("div",dt,[I(e.$slots,"info",{},void 0,!0)])],2),s("div",ut,[t(u)]),s("div",rt,[s("div",ct,[s("div",_t,[ft,s("div",mt,[I(e.$slots,"custom",{},void 0,!0),t(r,{class:"notification-icon",text:e.notifyStore.count,overlap:"",onClick:o[0]||(o[0]=p=>e.notifyStore.toggleNodal(!0))},{default:n(()=>[t(d,{size:"small"},{default:n(()=>[t(l,{size:"small",name:"notifications"})]),_:1})]),_:1},8,["text"]),t(r,{text:e.chatUnreadcount,overlap:""},{default:n(()=>[t(c,{loading:e.chatIconBusy},{default:n(()=>[t(d,{onClick:e.goChat,size:"small"},{default:n(()=>[t(l,{size:"small",name:"message"})]),_:1},8,["onClick"])]),_:1},8,["loading"])]),_:1},8,["text"]),e.user?(h(),U("span",{key:0,class:"profile-badge-box",onClick:o[1]||(o[1]=(...p)=>e.goProfile&&e.goProfile(...p))},[e.avatar?(h(),A(d,{key:0,size:"small",src:e.avatar.url,alt:e.avatar.path},null,8,["src","alt"])):(h(),A(d,{key:1,size:"small",icon:"person"})),s("span",null,S(e.user.name),1),s("span",null,[t(l,{size:"small",name:"expand_more"})])])):z("",!0),t(g,{class:"ml-4",size:"small",preset:"primary",round:"",onClick:e.logout},{default:n(()=>[t(l,{size:"small",name:"lock"}),pt]),_:1},8,["onClick"])])]),s("div",vt,[t(c,{loading:e.props.busy,size:60},{default:n(()=>[I(e.$slots,"default",{},void 0,!0)]),_:3},8,["loading"])])])]),t(m,{show:e.notifyStore.showModal,"onUpdate:show":o[2]||(o[2]=p=>e.notifyStore.toggleNodal(p)),onClose:o[3]||(o[3]=p=>e.notifyStore.toggleNodal(!1))},null,8,["show"])])}const bt=M(lt,[["render",ht],["__scopeId","data-v-d8372b02"]]);export{bt as a,tt as c};