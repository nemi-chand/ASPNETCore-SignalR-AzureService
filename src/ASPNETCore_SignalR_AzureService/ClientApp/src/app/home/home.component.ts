import { Component, OnInit } from '@angular/core';

import { chatSignalRService } from '../service/chat.signalr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  message: any;
  messageHistory: any[];
  constructor(private chatService: chatSignalRService) {
    this.messageHistory = [];    
  }

  ngOnInit() {
    this.chatService.onMessageReceived.subscribe((message) => {
      this.messageHistory.push(message);
    });
  }

  send() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

}
