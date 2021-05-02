import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }
  chatOpen: boolean = false
count: number = 0
  userMsg: string = ''
  massages: Array<string> = []
  autoMsgs:  Array<string> = [`How can I help you?`,'Leave your Email here','Thank you!', 'Chat is over. Goodbye!','']

  ngOnInit(): void {
  }
  toggleChat(){
    this.chatOpen = !this.chatOpen
  }
  closeChat(){
    this.chatOpen = false
  }

  sendMsg() {
    if(!this.userMsg) return
    this.massages.push(this.userMsg)
    setTimeout(() =>{
        this.massages.push(this.autoMsgs[this.count])
        this.count++
        if (this.count>4){
           this.chatOpen = false
        this.massages = []
        }
        this.userMsg =''
    },1000)         
}

}
