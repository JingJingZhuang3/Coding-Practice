import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chlid1-modify',
  templateUrl: './chlid1-modify.component.html',
  styleUrls: ['./chlid1-modify.component.css']
})
export class Chlid1ModifyComponent implements OnInit {
  constructor() { }

  userInput:string=""
  ngOnInit(): void {
  }

  @Output()   // send data to parent
  private nameChangedEvent = new EventEmitter()  // 事件发射器

  // use method to pass data to parent component
  changeName(){
    // send data to parent
    this.nameChangedEvent.emit(this.userInput)  // emit the data you want to send
  }
}
