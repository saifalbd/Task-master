import{d as P,G,H as K,I as Q,J as W,K as X,L as Y,M as Z,N as ee,_ as T,f as m,c as N,b as t,w as o,u as j,e as a,C as R,D as E,i as n,O,q as D,h as $,P as V,j as S,z as B,v as te,r as U,F,x,B as I,m as J,y as L,Q as oe,R as se,S as ne,T as ae,s as le,U as ie,V as de,W as re}from"./app-69e9ea5d.js";const ue=P({props:{lg:{type:Boolean,required:!0}},components:{HomeFilled:G,Collection:K,Management:Q,Files:W,Connection:X,Avatar:Y,Position:Z,User:ee},setup(e){const s=j();return{props:e,go:i=>{s.push(i)}}}}),v=e=>(R("data-v-e6d0b575"),e=e(),E(),e),ce={class:"asside-box"},_e=v(()=>n("span",{style:{"font-weight":"bold"}},"Employees",-1)),fe=v(()=>n("b",null,"Admin Board",-1)),pe=v(()=>n("b",null,"Job Board",-1)),me=v(()=>n("b",null,"Contacts",-1)),ve=v(()=>n("span",{style:{"font-weight":"bold"}},"Employees",-1)),ge=v(()=>n("b",null,"Employees",-1)),he=v(()=>n("b",null,"Department",-1)),be=v(()=>n("b",null,"Designation",-1)),ke=v(()=>n("b",null,"Clients",-1)),$e=v(()=>n("span",{style:{"font-weight":"bold"}},"Task Type & Category",-1)),ye=v(()=>n("b",null,"Category",-1)),Ce=v(()=>n("b",null,"Task Type",-1)),we=v(()=>n("b",null,"Teams",-1)),Se=v(()=>n("span",{style:{"font-weight":"bold"}},"Projects",-1)),Ae=v(()=>n("b",null,"Assignments (Project)",-1)),Be=v(()=>n("b",null,"Jobs (Job)",-1)),Ue=v(()=>n("span",{style:{"font-weight":"bold"}},"Tasks",-1)),ze=v(()=>n("b",null,"Assignments (Task)",-1)),Ne=v(()=>n("b",null,"Jobs (Task)",-1)),Te=v(()=>n("b",null,"toDoList",-1));function Me(e,s,d,i,y,C){const c=a("home-filled"),l=a("el-icon"),r=a("el-menu-item"),f=a("el-sub-menu"),g=a("avatar"),_=a("connection"),h=a("position"),b=a("user"),k=a("management"),w=a("files"),A=a("el-menu");return m(),N("div",ce,[t(A,{collapse:!e.props.lg,"default-active":"1"},{default:o(()=>[t(f,{index:"1"},{title:o(()=>[t(l,null,{default:o(()=>[t(c)]),_:1}),_e]),default:o(()=>[t(r,{index:"1-1",onClick:s[0]||(s[0]=p=>e.go({name:"home"}))},{default:o(()=>[t(l,null,{default:o(()=>[t(c)]),_:1}),fe]),_:1}),t(r,{index:"1-2",onClick:s[1]||(s[1]=p=>e.go({name:"job.home"}))},{default:o(()=>[t(l,null,{default:o(()=>[t(c)]),_:1}),pe]),_:1})]),_:1}),t(r,{index:"2",onClick:s[2]||(s[2]=p=>e.go({name:"contact"}))},{title:o(()=>[me]),default:o(()=>[t(l,null,{default:o(()=>[t(g)]),_:1})]),_:1}),t(f,{index:"2"},{title:o(()=>[t(l,null,{default:o(()=>[t(g)]),_:1}),ve]),default:o(()=>[t(r,{index:"2-1",onClick:s[3]||(s[3]=p=>e.go({name:"employee"}))},{default:o(()=>[t(l,null,{default:o(()=>[t(g)]),_:1}),ge]),_:1}),t(r,{index:"2-2",onClick:s[4]||(s[4]=p=>e.go({name:"department"}))},{default:o(()=>[t(l,null,{default:o(()=>[t(_)]),_:1}),he]),_:1}),t(r,{index:"2-3",onClick:s[5]||(s[5]=p=>e.go({name:"designation"}))},{default:o(()=>[t(l,null,{default:o(()=>[t(h)]),_:1}),be]),_:1})]),_:1}),t(r,{index:"3",onClick:s[6]||(s[6]=p=>e.go({name:"client"}))},{title:o(()=>[ke]),default:o(()=>[t(l,null,{default:o(()=>[t(b)]),_:1})]),_:1}),t(f,{index:"4"},{title:o(()=>[t(l,null,{default:o(()=>[t(_)]),_:1}),$e]),default:o(()=>[t(r,{index:"4",onClick:s[7]||(s[7]=p=>e.go({name:"category"}))},{title:o(()=>[ye]),default:o(()=>[t(l,null,{default:o(()=>[t(_)]),_:1})]),_:1}),t(r,{index:"4",onClick:s[8]||(s[8]=p=>e.go({name:"taskType"}))},{title:o(()=>[Ce]),default:o(()=>[t(l,null,{default:o(()=>[t(_)]),_:1})]),_:1})]),_:1}),t(r,{index:"7",onClick:s[9]||(s[9]=p=>e.go({name:"team"}))},{title:o(()=>[we]),default:o(()=>[t(l,null,{default:o(()=>[t(k)]),_:1})]),_:1}),t(f,{index:"8"},{title:o(()=>[t(l,null,{default:o(()=>[t(w)]),_:1}),Se]),default:o(()=>[t(r,{index:"8-1",onClick:s[10]||(s[10]=p=>e.go({name:"project"}))},{default:o(()=>[Ae]),_:1}),t(r,{index:"8-2",onClick:s[11]||(s[11]=p=>e.go({name:"job.project"}))},{default:o(()=>[Be]),_:1})]),_:1}),t(f,{index:"9"},{title:o(()=>[t(l,null,{default:o(()=>[t(w)]),_:1}),Ue]),default:o(()=>[t(r,{index:"9-1",onClick:s[12]||(s[12]=p=>e.go({name:"task"}))},{default:o(()=>[ze]),_:1}),t(r,{index:"9-2",onClick:s[13]||(s[13]=p=>e.go({name:"job.task"}))},{default:o(()=>[Ne]),_:1})]),_:1}),t(r,{index:"10",onClick:s[14]||(s[14]=p=>e.go({name:"toDoList"}))},{title:o(()=>[Te]),default:o(()=>[t(l,null,{default:o(()=>[t(c)]),_:1})]),_:1})]),_:1},8,["collapse"])])}const Pe=T(ue,[["render",Me],["__scopeId","data-v-e6d0b575"]]),q=O("notifications",{state(){return{count:0,notifications:[],showModal:!1}},actions:{toggleNodal(e){this.showModal=e},addNotify(e){this.notifications.unshift(e),this.count++},notificationsFetch(){axios.get(route("notification")).then(({data:e})=>{this.notifications=e,this.count=e.length})}},getters:{taskNotifications(){return this.notifications.filter(e=>["TaskAssigned","TaskStatusChanged"].includes(e.type))},employeeAssignedNotifications(){return this.notifications.filter(e=>e.type=="EmployeeAssigned")}}}),Ve={props:{dropdown:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},preset:{type:String,default:"secondary"},size:{type:String,default:"medium"},color:{type:String,default:"primary"},textColor:{type:String,default:""},borderColor:{type:String,default:""},status:{type:[Number,String],required:!0}},setup(e){let s=D(()=>te[parseInt(e.status)]);return{props:e,status:s}}};function Ie(e,s,d,i,y,C){const c=a("va-button-dropdown"),l=a("va-button");return d.dropdown?(m(),$(c,{key:0,label:i.status.title,preset:i.props.preset,loading:i.props.loading,plain:i.props.plain,size:i.props.size,color:i.status.color,"text-color":i.props.textColor,"border-color":i.props.borderColor},{default:o(()=>[V(e.$slots,"default")]),_:3},8,["label","preset","loading","plain","size","color","text-color","border-color"])):(m(),$(l,{key:1,preset:i.props.preset,loading:i.props.loading,plain:i.props.plain,size:i.props.size,color:i.status.color,"text-color":i.props.textColor,"border-color":i.props.borderColor},{default:o(()=>[S(B(i.status.title),1)]),_:1},8,["preset","loading","plain","size","color","text-color","border-color"]))}const De=T(Ve,[["render",Ie]]);const Le=P({components:{statusBtnVue:De},model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!0}},setup(e,{emit:s}){const d=q(),i=j(),y=U(!1),C="Notifications",c=()=>{s("update:show",!1)};return{title:C,busy:y,props:e,close:c,go:(f,g)=>{axios.put(route("markAsReadNotify",{id:g}),{read:1}),c(),i.push(f)},read:f=>{axios.put(route("markAsReadNotify",{id:f.id}),{read:f.read_at?0:1}),f.read_at=!0},notifyStore:d}}}),je={class:"layout va-gutter-1"},Re={class:"row"},Ee={class:"flex xs12"},Fe={class:"item mb-4"},xe={class:"form-title"},Oe={class:"text"},Je={key:0,class:"flex xs12"},qe=["src"],He={key:1,class:"flex xs12"},Ge=["src"],Ke={class:"flex xs12"},Qe={class:"item actions-btns"};function We(e,s,d,i,y,C){const c=a("va-icon"),l=a("va-list-label"),r=a("va-avatar"),f=a("va-list-item-section"),g=a("el-link"),_=a("va-list-item-label"),h=a("status-btn-vue"),b=a("va-list-item"),k=a("va-list"),w=a("va-button"),A=a("va-inner-loading"),p=a("va-modal");return m(),$(p,{modelValue:e.show,"onUpdate:modelValue":s[0]||(s[0]=u=>e.show=u),fullscreen:!1,"hide-default-actions":"","no-outside-dismiss":"",class:"form-sceen"},{default:o(()=>[t(A,{loading:e.busy},{default:o(()=>[n("div",je,[n("div",Re,[n("div",Ee,[n("div",Fe,[n("div",xe,[t(c,{name:"notifications"}),n("span",Oe,B(e.title),1)])])]),e.notifyStore.taskNotifications.length?(m(),N("div",Je,[t(k,null,{default:o(()=>[t(l,null,{default:o(()=>[S(" TaskNotifications ")]),_:1}),(m(!0),N(F,null,x(e.notifyStore.taskNotifications,(u,z)=>(m(),$(b,{class:"list__item",key:z},{default:o(()=>[t(f,{avatar:"",onClick:M=>e.go({name:"userProfile",params:{user:u.data.user_id}},u.id)},{default:o(()=>[t(r,{size:40},{default:o(()=>[n("img",{src:u.fromUser.avatar.url},null,8,qe)]),_:2},1024)]),_:2},1032,["onClick"]),t(f,null,{default:o(()=>[t(_,{onClick:M=>e.go({name:"userProfile",params:{user:u.data.user_id}},u.id)},{default:o(()=>[t(g,{underline:!1},{default:o(()=>[n("b",null,B(u.fromUser.name),1)]),_:2},1024)]),_:2},1032,["onClick"]),u.type=="TaskStatusChanged"?(m(),$(_,{key:0,onClick:M=>e.go({name:"job.task.show",params:{id:u.data.task_id}},u.id),lines:z+1},{default:o(()=>[S(B(u.data.message)+" Changed Status From ",1),t(h,{status:u.data.beforeStatus,size:"small"},null,8,["status"]),S(" To "),t(h,{status:u.data.status,size:"small"},null,8,["status"])]),_:2},1032,["onClick","lines"])):(m(),$(_,{key:1,onClick:M=>e.go({name:"job.task.show",params:{id:u.data.task_id}},u.id),lines:z+1},{default:o(()=>[S(B(u.data.message),1)]),_:2},1032,["onClick","lines"]))]),_:2},1024),t(f,{icon:""},{default:o(()=>[t(c,{onClick:M=>e.read(u),name:u.read_at?"visibility_off":"remove_red_eye",color:"background-tertiary"},null,8,["onClick","name"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])):I("",!0),e.notifyStore.employeeAssignedNotifications.length?(m(),N("div",He,[t(k,null,{default:o(()=>[t(l,null,{default:o(()=>[S(" Employee Assigned Notifications ")]),_:1}),(m(!0),N(F,null,x(e.notifyStore.employeeAssignedNotifications,(u,z)=>(m(),$(b,{class:"list__item",key:z,onClick:M=>e.go({name:"userProfile",params:{user:u.data.user_id}},u.id)},{default:o(()=>[t(f,{avatar:""},{default:o(()=>[t(r,{size:40},{default:o(()=>[n("img",{src:u.fromUser.avatar.url},null,8,Ge)]),_:2},1024)]),_:2},1024),t(f,null,{default:o(()=>[t(_,null,{default:o(()=>[n("b",null,B(u.fromUser.name),1)]),_:2},1024),t(_,{lines:z+1},{default:o(()=>[S(B(u.data.message),1)]),_:2},1032,["lines"])]),_:2},1024),t(f,{icon:""},{default:o(()=>[t(c,{name:"remove_red_eye",color:"background-tertiary"})]),_:1})]),_:2},1032,["onClick"]))),128))]),_:1})])):I("",!0),n("div",Ke,[n("div",Qe,[t(w,{color:"danger",size:"small",onClick:e.close},{default:o(()=>[t(c,{class:"material-icons"},{default:o(()=>[S("close")]),_:1}),S(" Close")]),_:1},8,["onClick"])])])])])]),_:1},8,["loading"])]),_:1},8,["modelValue"])}const Xe=T(Le,[["render",We],["__scopeId","data-v-d6d3c6d3"]]);const Ye=P({model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!0}},setup(e,{emit:s}){const d=J(),i=U(!1),y="Profile Thumbnil";let C=U(!1),c=U(""),l=U(null);return{title:y,attach:l,hasThumb:C,thumbnil:c,fileAded:_=>{let b=_.target.files;if(b.length){let k=b[0];l.value=k;let w=new FileReader;w.onload=()=>{let A=w.result;c.value=A,C.value=!0},w.readAsDataURL(k)}},update:async()=>{try{const _=route("avatar",{},!1),h=new FormData;l.value&&h.append("avatar",l.value);const{data:b}=await axios.post(_,h);d.updateAvatar(b),d.hideProfileModal()}catch(_){console.error(_)}},busy:i,props:e,close:()=>{s("update:show",!1)}}}}),Ze=e=>(R("data-v-8d7b5baf"),e=e(),E(),e),et={class:"layout va-gutter-1"},tt={class:"row"},ot={class:"flex xs12"},st={class:"item mb-4"},nt={class:"form-title"},at={class:"text"},lt={class:"flex xs12"},it={class:"row"},dt={class:"flex xs12"},rt={key:0,class:"img-box"},ut=["src"],ct={class:"input-box"},_t={class:"va-file-upload va-file-upload--dropzone",style:{"background-color":"rgba(21, 79, 193, 0.08)"}},ft=Ze(()=>n("div",{class:"va-file-upload__field"},[n("div",{class:"va-file-upload__field__text"}," Click Here And Upload File ")],-1)),pt={class:"flex xs12"},mt={class:"item actions-btns"};function vt(e,s,d,i,y,C){const c=a("va-icon"),l=a("va-button"),r=a("va-inner-loading"),f=a("va-modal");return m(),$(f,{modelValue:e.show,"onUpdate:modelValue":s[1]||(s[1]=g=>e.show=g),fullscreen:!1,"hide-default-actions":"","no-outside-dismiss":"",class:"form-sceen"},{default:o(()=>[t(r,{loading:e.busy},{default:o(()=>[n("div",et,[n("div",tt,[n("div",ot,[n("div",st,[n("div",nt,[t(c,{name:"notifications"}),n("span",at,B(e.title),1)])])]),n("div",lt,[n("div",it,[n("div",dt,[n("div",{class:L(["tumb-card",{hasThumb:e.hasThumb}])},[e.hasThumb?(m(),N("div",rt,[n("img",{src:e.thumbnil,alt:""},null,8,ut)])):I("",!0),n("div",ct,[n("div",_t,[ft,n("input",{type:"file",class:"va-file-upload__field__input",tabindex:"-1","aria-hidden":"true",onChange:s[0]||(s[0]=(...g)=>e.fileAded&&e.fileAded(...g))},null,32)])])],2)])])]),n("div",pt,[n("div",mt,[t(l,{color:"info",onClick:e.update},{default:o(()=>[S(" Skip")]),_:1},8,["onClick"]),t(l,{color:"success",onClick:e.update},{default:o(()=>[S(" Next")]),_:1},8,["onClick"])])])])])]),_:1},8,["loading"])]),_:1},8,["modelValue"])}const gt=T(Ye,[["render",vt],["__scopeId","data-v-8d7b5baf"]]),ht=O("chat",{state(){return{users:[],totalUnreadCount:0}},actions:{async fetchChatUsers(e){try{const{data:s}=await axios.get(route("chatUsers"));this.users=s.map((d,i)=>(d.active=!i,d.messages=[],d)),e(this.users)}catch(s){console.error(s)}},increaseTotalUnread(e){this.totalUnreadCount=+e},increaseUnread(e,s){this.users=this.users.map(d=>(d.id==e&&(d.unReadCount=d.unReadCount+s),d)),this.totalUnreadCount=this.totalUnreadCount+s,oe()},listen(e){Echo.join("chat").joining(s=>{axios.put(route("online",{user:s.id}))}).leaving(s=>{axios.put(route("offline",{user:s.id}),{})}).listen("UserOnline",s=>{const d=this.users.find(i=>i.id==s.id);d&&(d.isOnline=!0)}).listen("UserOffline",s=>{const d=this.users.find(i=>i.id==s.id);d&&(d.isOnline=!1)}).listen("ChatEvent",s=>{e(s)})}}}),bt=P({model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!0}},setup(e,{emit:s}){return{props:e}}}),kt=n("div",null,"Chat modal",-1);function $t(e,s,d,i,y,C){const c=a("va-inner-loading"),l=a("va-modal");return m(),$(l,{modelValue:e.show,"onUpdate:modelValue":s[0]||(s[0]=r=>e.show=r),fullscreen:!0,"hide-default-actions":"","no-outside-dismiss":""},{default:o(()=>[t(c,{loading:e.busy},{default:o(()=>[kt]),_:1},8,["loading"])]),_:1},8,["modelValue"])}const yt=T(bt,[["render",$t]]);const Ct=P({components:{AsideBar:Pe,NotificationModel:Xe,ProfileEditModal:gt,ChatModal:yt,DArrowLeft:se,DArrowRight:ne},props:{title:{type:String,default:"title"},showInfoBar:{type:Boolean,default:!1},busy:{type:Boolean,default:!0}},setup(e){const s=J(),d=ht(),i=U(null),y=U(!1),C=D(()=>d.totalUnreadCount);let c=s.token,l=s.user,r=s.avatar,f=D(()=>s.showProfileModal),g=U(!1);c&&(window.Echo.connector.options.auth.headers.Authorization=`Bearer ${c}`);const _=j(),h=q();h.notificationsFetch();const b=()=>{ie(),_.push({name:"login"})},k=U(!1),w=()=>{d.users.length?_.push({name:"chat"}):(k.value=!0,d.fetchChatUsers(()=>{k.value=!1,_.push({name:"chat"})}))},A=()=>{_.push({name:"profile"})},p=()=>{const z=de(re).greater("sm");y.value=z.value};return ae(i,u=>{p()}),le(()=>{axios.get(route("chatUnreadcount")).then(({data:u})=>{d.increaseTotalUnread(u)})}),{lg:y,avatar:r,props:e,notifyStore:h,user:l,showProfileModal:f,showChatModal:g,chatUnreadcount:C,chatIconBusy:k,logout:b,goChat:w,goProfile:A}}}),H=e=>(R("data-v-bc27f170"),e=e(),E(),e),wt={class:"info-bar-body"},St={class:"asside"},At={class:"main-content"},Bt={class:"inner"},Ut={class:"top-nav"},zt={class:"page-title"},Nt=H(()=>n("span",{class:"hidden-sm-and-down"},"Task Master",-1)),Tt={class:"right-side"},Mt=H(()=>n("span",{class:"mx-2"},"Logout",-1)),Pt={class:"page-content"};function Vt(e,s,d,i,y,C){const c=a("AsideBar"),l=a("DArrowLeft"),r=a("el-icon"),f=a("DArrowRight"),g=a("el-button"),_=a("va-icon"),h=a("va-avatar"),b=a("va-badge"),k=a("va-inner-loading"),w=a("va-button"),A=a("NotificationModel");return m(),N("div",{ref:"el",class:L(["main-layout",{lg:e.lg}])},[n("div",{class:L(["info-bar",{show:e.props.showInfoBar}])},[n("div",wt,[V(e.$slots,"info",{},void 0,!0)])],2),n("div",St,[t(c,{lg:!!e.lg},null,8,["lg"])]),n("div",At,[n("div",Bt,[n("div",Ut,[n("div",zt,[t(g,{round:"",onClick:s[0]||(s[0]=p=>e.lg=!e.lg)},{default:o(()=>[e.lg?(m(),$(r,{key:0},{default:o(()=>[t(l)]),_:1})):(m(),$(r,{key:1},{default:o(()=>[t(f)]),_:1}))]),_:1}),Nt]),n("div",Tt,[V(e.$slots,"custom",{},void 0,!0),t(b,{class:"notification-icon",text:e.notifyStore.count,overlap:"",onClick:s[1]||(s[1]=p=>e.notifyStore.toggleNodal(!0))},{default:o(()=>[t(h,{size:"small"},{default:o(()=>[t(_,{size:"small",name:"notifications"})]),_:1})]),_:1},8,["text"]),t(b,{text:e.chatUnreadcount,overlap:""},{default:o(()=>[t(k,{loading:e.chatIconBusy},{default:o(()=>[t(h,{onClick:e.goChat,size:"small"},{default:o(()=>[t(_,{size:"small",name:"message"})]),_:1},8,["onClick"])]),_:1},8,["loading"])]),_:1},8,["text"]),e.user?(m(),N("span",{key:0,class:"profile-badge-box",onClick:s[2]||(s[2]=(...p)=>e.goProfile&&e.goProfile(...p))},[e.avatar?(m(),$(h,{key:0,size:"small",src:e.avatar.url,alt:e.avatar.path},null,8,["src","alt"])):(m(),$(h,{key:1,size:"small",icon:"person"})),n("span",null,B(e.user.name),1),n("span",null,[t(_,{size:"small",name:"expand_more"})])])):I("",!0),t(w,{class:"ml-4",size:"small",preset:"primary",round:"",onClick:e.logout},{default:o(()=>[t(_,{size:"small",name:"lock"}),Mt]),_:1},8,["onClick"])])]),n("div",Pt,[t(k,{loading:e.props.busy,size:60},{default:o(()=>[V(e.$slots,"default",{},void 0,!0)]),_:3},8,["loading"])])])]),t(A,{show:e.notifyStore.showModal,"onUpdate:show":s[3]||(s[3]=p=>e.notifyStore.toggleNodal(p)),onClose:s[4]||(s[4]=p=>e.notifyStore.toggleNodal(!1))},null,8,["show"])],2)}const Dt=T(Ct,[["render",Vt],["__scopeId","data-v-bc27f170"]]);export{De as S,Dt as a,ht as c};
