import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chlid2-photo',
  templateUrl: './chlid2-photo.component.html',
  styleUrls: ['./chlid2-photo.component.css']
})
export class Chlid2PhotoComponent implements OnInit {
  @Input()  // decorator: get property value from parent
  child2Name:string=""

  constructor() { }
  ngOnInit(): void {
  }

}
