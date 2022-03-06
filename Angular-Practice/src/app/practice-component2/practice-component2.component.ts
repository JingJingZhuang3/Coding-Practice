import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-component2',
  templateUrl: './practice-component2.component.html',
  styleUrls: ['./practice-component2.component.css'],
})
export class PracticeComponent2Component implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  uname: string = 'John Doe';
  age: number = 23;
  cnt: number = 0;
  items = ['Apple', 'Book', 'Cream'];
  myStyleObj = {
    backgroundColor: '#383',
    color: '#fff',
    'border-color': '#252',
  };

  myClassObj = {
    btn: true,
    'btn-danger': false,
    'btn-success': true,
  };

  userLevel = 'normal';
  loadMore() {
    this.myStyleObj.backgroundColor = '#833';
    this.myStyleObj['border-color'] = '#522';
  }
  loadMore2() {
    this.myClassObj['btn-danger'] = true;
    this.myClassObj['btn-success'] = false;
  }
}
