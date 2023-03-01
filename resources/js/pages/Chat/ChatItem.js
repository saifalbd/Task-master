
import { el, mount, unmount } from "redom";
import { icon } from "../../Plugins/icon";

export class ChatItem {
    constructor(chat) {
        this.chat = chat;
        this.isSend = chat.isSend;
        this.isHover = false;
        let messageDom = el("span", `${this.isSend?'Send':'Recieve'}: ${chat.message}`)
        this.chatRow = el(".chat-row", {}, [
            this.fileBox(chat),
            messageDom
        ]);
        this.el = el("li", {}, [this.chatRow]);
        if (this.isSend) {
            this.el.classList.add("right");
        }
    }

    fileBox(chat){
        if(chat.attach){
            let attach = chat.attach;
            if(attach.isImg){
                return el('img',{src:chat.attach.url})
            }else{
                return el('a',{href:attach.url},`${attach.url}`)
            }
         
        }else{
            return el('span')
        }
    }

    onmount() {
        const { id, is_view,message } = this.chat;
      
        window.Echo.private(`chatread.${id}`)
        .listen("ChatReadEvent", (chat) => {
           let has = this.chatRow.querySelector('.chat-row-icon');
           if(has){
            has.remove();
           }

           mount(
            this.chatRow,
            el("span", { class: "chat-row-icon" }, [
                icon.create(icon.dobbleCheck, 18),
            ])
        );

    
          })
       
        if (this.isSend) {
         
            if (is_view != null) {
                if (is_view) {
                    mount(
                        this.chatRow,
                        el("span", { class: "chat-row-icon" }, [
                            icon.create(icon.dobbleCheck, 18),
                        ])
                    );
                } else {
                    mount(
                        this.chatRow,
                        el("span", { class: "chat-row-icon" }, [
                            icon.create(icon.check, 18),
                        ])
                    );
                }
            }

         
        
        } else {
            this.el.addEventListener("mouseover", () => {
                if (!this.isHover) {
                  
                    if (!is_view) {
                        window.axios.put(route("chat.read", { chat: id }), {});
                    }
                    this.isHover = true;
                }
                
            });
        }
    }
}

export class ChatContent {
    constructor() {
        this.el = el("ul", { class: "chat-content" });
        this.list = [];
    }

    pushCollection(items) {
        items.forEach((chat) => {
            let Li = new ChatItem(chat);
            this.list.push(Li);
            mount(this.el, Li);
        });
    }

    push(chat) {
        let Li = new ChatItem(chat);
        this.list.push(Li);
        mount(this.el, Li);
    }

    removeCollection() {
        this.list.forEach((li) => {
            unmount(this.el, li);
        });
    }

    scrollToBottom() {
        let l = this.list.at(-1);
        if (l) {
            // console.log(l)
            l.el.scrollIntoView();
        }
    }
}
