import{an as K,l as V,_ as q,a as W,m as J,r as S,M as P,h as D,w as _,e as y,f as B,i as a,b as p,j as F,c as U,p as X,F as Y,J as M,t as E,K as N,g as Z,ao as G,ap as Q}from"./app-c6f1798b.js";import{a as $,c as tt}from"./app-layout-d1a0a4ef.js";import{_ as et}from"./PageTitleBox-570dae93.js";import{e as n,m as b,u as st,i as v}from"./icon-7c2f508c.js";class O{constructor(t){this.chat=t,this.isSend=t.isSend,this.isHover=!1;let o=n("span",` ${t.message}`);this.chatRow=n(".chat-row",{},[this.fileBox(t),o]),this.el=n("li",{},[this.chatRow,this.menuBox()]),this.isSend||this.el.classList.add("right")}dropdown(t,o){const e=n("ul",{id:"chat-dropdown",class:"chat-dropdown",style:{left:`${t}px`,top:`${o}px`}},[n("li","Remove"),n("li","Reply")]);K(e,()=>{e.remove()}),document.getElementById("chat-content").append(e)}menuBox(){let t=n("button",{},[v.create(v.dotsVertical)]);return t.addEventListener("click",o=>{console.log(o);const{layerX:e,layerY:l}=o,d=e;let g=l;console.log({left:d,top:g}),this.dropdown(d,g)}),n("div",{class:"menu-box"},[t])}fileBox(t){if(t.attach){let o=t.attach;return o.isImg?n("img",{src:t.attach.url}):n("a",{href:o.url},`${o.url}`)}else return n("span","")}onmount(){const{id:t,is_view:o,message:e}=this.chat;window.Echo.private(`chatread.${t}`).listen("ChatReadEvent",l=>{let d=this.chatRow.querySelector(".chat-row-icon");d&&d.remove(),b(this.chatRow,n("span",{class:"chat-row-icon"},[v.create(v.dobbleCheck,18)]))}),this.isSend?o!=null&&(o?b(this.chatRow,n("span",{class:"chat-row-icon"},[v.create(v.dobbleCheck,18)])):b(this.chatRow,n("span",{class:"chat-row-icon"},[v.create(v.check,18)]))):this.el.addEventListener("mouseover",()=>{this.isHover||(o||window.axios.put(route("chat.read",{chat:t}),{}),this.isHover=!0)})}}class ot{constructor(){this.el=n("ul",{id:"chat-content",class:"chat-content"}),this.list=[]}pushCollection(t){t.forEach(o=>{let e=new O(o);this.list.push(e),b(this.el,e)})}push(t){let o=new O(t);this.list.push(o),b(this.el,o)}removeCollection(){this.list.forEach(t=>{st(this.el,t)})}scrollToBottom(){let t=this.list.at(-1);t&&t.el.scrollIntoView()}}class nt{constructor(t,o,e,l,d){this.parentDom=t,this.src=o,this.file=e,this.captionText="",this.callBack=l,this.isImg=d,this.attachIcon="M16.61 13.5C15.81 13.85 15.11 14.36 14.54 15H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17V11.5H9.5C8.95 11.5 8.5 11.95 8.5 12.5S8.95 13.5 9.5 13.5H16.61M3.5 12.5C3.5 10.29 5.29 8.5 7.5 8.5H18C19.38 8.5 20.5 9.62 20.5 11C20.5 11.84 20.08 12.58 19.45 13.03C20.05 13.07 20.63 13.2 21.17 13.41C21.69 12.74 22 11.91 22 11C22 8.79 20.21 7 18 7H7.5C4.46 7 2 9.46 2 12.5S4.46 18 7.5 18H13.09C13.18 17.47 13.34 16.97 13.55 16.5H7.5C5.29 16.5 3.5 14.71 3.5 12.5M21.34 15.84L17.75 19.43L16.16 17.84L15 19L17.75 22L22.5 17.25L21.34 15.84Z",this.el=n(".attach-model",{},[n(".attach-card",{},[this.close(),this.file_box(),this.captionBox(),this.sendBox()])])}close(){let t=n("div",{class:"close-box"},[v.create(v.close)]);return t.addEventListener("click",()=>{this.el.remove()}),t}file_box(){let t=n("div",{},[n("div",{style:`height: 100px;
                width: 100px;
                display: flex;
                justify-content: center;
                align-items: center;`},[v.create(this.attachIcon,50)]),n("p",{},this.src),n("div",{},`Size:${this.file.size}`)]),o=this.isImg?n("img",{src:this.src}):t;return n(".file_box",{},[o])}captionBox(){let t=n("input",{placeholder:"Caption"});return t.addEventListener("change",o=>{let e=t.value;this.captionText=e}),n("div",{class:"caption-box"},[t])}sendBox(){let t=n("button","send");return t.addEventListener("click",()=>{const o=this.captionText;this.callBack(o,this.file),this.el.remove()}),n(".send-box",{},[t])}}const j=(u,t,o,e)=>{let l=document.getElementById("chatMainBar");b(l,new nt(l,u,t,o,e))},at=u=>{let t=u.type;return console.log({type:t}),V.startsWith(t,"image")},it=(u,t)=>{try{let e=u.target.files;if(e.length){let l=e[0],d=at(l);console.log({isImg:d});const g=document.getElementById("attachBox"),L=z(t);if(g.removeChild(g.querySelector("input")),setTimeout(()=>{b(g,L)},3e3),d){let f=new FileReader;f.onload=function(){let k=f.result;j(k,l,t,d)},f.readAsDataURL(l)}else j(l.name,l,t,d)}}catch(o){console.error(o)}},z=u=>{let t=n("input",{class:"attach-input",type:"file"},[]);return t.addEventListener("change",o=>{it(o,u)}),t},lt={components:{AppLayout:$,PageTitleBox:et},setup(){const u=tt(),t=W(u.users),o=J(),e=S(!1),l=S(!1),d=Echo.join("chat").joining(s=>{axios.put(route("online",{user:s.id}))}).leaving(s=>{axios.put(route("offline",{user:s.id}),{})});(()=>{try{d.listen("UserOnline",s=>{c(s.id,1)}).listen("UserOffline",s=>{c(s.id,0)}).listenForWhisper("typing",s=>{let r=s.user;h.value.id==r&&(l.value=s.typing)}).listen("ChatEvent",s=>{const r=s.sender_id,i=h.value.id;if(console.log({sender_id:r,current_id:i,auth_id:f}),r!=f)if(i==r){let x=C(s);m.push(x),m.scrollToBottom()}else u.increaseUnread(s.sender_id,1)})}catch(s){console.error(s)}})();const L=s=>{console.log({typing:s}),d.whisper("typing",{user:f,typing:s})},f=o.auth_id,k=S(!1),h=S(null),w=S(""),m=new ot,C=s=>{const{sender_id:r,receiver_id:i}=s;return f==r?s.isSend=!0:s.isSend=!1,s},I=async()=>{let s=V.trim(w.value);e.value=!0;try{if(!s)throw"message are Empty";if(!h)throw"current user not found";const r=route("chat.store"),{data:i}=await axios.post(r,{receiver_id:h.value.id,message:s});m.push(C(i)),m.scrollToBottom(),w.value=""}catch(r){console.error(r)}e.value=!1},T=async s=>{let r=h.value;if(l.value=!1,r&&r.id==s.id)return null;m.removeCollection(),h.value=s,t.forEach(i=>i.active=!1),s.active=!0;try{const i=route("chat.index",{receiver_id:s.id}),{data:x}=await axios.get(i);let H=x.map(A=>C(A));b(document.getElementById("chatMainBar"),m),m.pushCollection(H),m.scrollToBottom()}catch(i){console.error(i)}},c=(s,r)=>{const i=t.find(x=>x.id==s);i&&(i.isOnline=!!r)},R=async(s,r)=>{try{if(!h.value)throw new Error("CurrentUser Not Found");const i=route("chat.store"),x=new FormData;x.append("message",s),x.append("receiver_id",h.value.id),x.append("file",r);const{data:H}=await axios.post(i,x);m.push(C(H)),m.scrollToBottom()}catch(i){console.error(i)}};return P(()=>{let s=V.head(t);s&&T(s),b(document.getElementById("attachBox"),z(R))}),{busy:k,sendBusy:e,users:t,currentUser:h,chatHistory:T,text:w,send:I,typing:l,isTyping:L}}},ct={class:"chat-layout full-screen"},rt={class:"chat-side-bar"},dt={class:"chat-main-bar",id:"chatMainBar"},ut={key:0,class:"current-info"},ht={class:"left"},mt={key:0,class:"avatar-box"},pt=["src"],_t={class:"name"},vt={class:"position"},ft={class:"input-box-layout"},xt={key:0},yt={class:"attach-box",id:"attachBox"},gt=a("div",{class:"input-loader"},"loading ...",-1);function bt(u,t,o,e,l,d){const g=y("page-title-box"),L=y("va-list-label"),f=y("va-avatar"),k=y("va-badge"),h=y("va-list-item-section"),w=y("va-list-item-label"),m=y("va-list-item"),C=y("va-list"),I=y("va-icon"),T=y("app-layout");return B(),D(T,{busy:e.busy},{default:_(()=>[a("div",null,[p(g,{title:"Chats"})]),a("div",ct,[a("div",rt,[p(C,null,{default:_(()=>[p(L,{class:"mb-3"},{default:_(()=>[F(" Contacts ")]),_:1}),(B(!0),U(Y,null,X(e.users,(c,R)=>(B(),D(m,{class:N({list__item:!0,active:c.active}),key:R,disabled:!1,onClick:s=>e.chatHistory(c)},{default:_(()=>[p(h,{avatar:""},{default:_(()=>[p(k,{dot:"",color:c.isOnline?"success":"secondary"},{default:_(()=>[p(f,{size:"small"})]),_:2},1032,["color"])]),_:2},1024),p(h,null,{default:_(()=>[p(w,null,{default:_(()=>[a("b",null,E(c.name),1)]),_:2},1024),p(w,null,{default:_(()=>[a("small",null,E(c.position),1)]),_:2},1024),p(w,{caption:""},{default:_(()=>[F(E(c.lastMessage),1)]),_:2},1024)]),_:2},1024),p(h,{icon:""},{default:_(()=>[a("b",null,E(c.unReadCount),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),a("div",dt,[e.currentUser?(B(),U("div",ut,[a("div",ht,[e.currentUser.avatar?(B(),U("div",mt,[a("img",{src:e.currentUser.avatar.url,alt:"",srcset:""},null,8,pt)])):M("",!0),a("div",null,[a("div",_t,E(e.currentUser.name),1),a("div",vt,E(e.currentUser.position),1)])])])):M("",!0),a("div",ft,[a("small",null,[e.typing?(B(),U("b",xt,"typing...")):M("",!0)]),a("div",{class:N(["input-box",{busy:e.sendBusy}])},[a("div",yt,[a("button",null,[p(I,{name:"attach_file"})])]),Z(a("input",{class:"text-input",type:"text","onUpdate:modelValue":t[0]||(t[0]=c=>e.text=c),onFocus:t[1]||(t[1]=c=>e.isTyping(!0)),onBlur:t[2]||(t[2]=c=>e.isTyping(!1)),onKeyup:t[3]||(t[3]=Q((...c)=>e.send&&e.send(...c),["enter"]))},null,544),[[G,e.text]]),a("button",{onClick:t[4]||(t[4]=(...c)=>e.send&&e.send(...c))},"Send"),gt],2)])])])]),_:1},8,["busy"])}const Lt=q(lt,[["render",bt]]);export{Lt as default};