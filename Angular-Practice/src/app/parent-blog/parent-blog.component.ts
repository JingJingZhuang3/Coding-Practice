import { Component, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-blog',
  templateUrl: './parent-blog.component.html',
  styleUrls: ['./parent-blog.component.css']
})
export class ParentBlogComponent implements OnInit {

  userName:string ="Someone"
  constructor() { }
  ngOnInit(): void {
  }
  // get data from custom event: nameChangedEvent
  handleEvent(event:any){
    // console.log(event)
    this.userName=event
  }

  @ViewChild('c0', {static: true})
  child0:any

  @ViewChild('c1', {static: true})
  child1:any

  @ViewChild('c2', {static: true})
  child2:any
  print(){
    console.log(this.child0)
    console.log(this.child1)
    console.log(this.child2)
  }
}
