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
  msg = '';
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
  doUnameChange() {
    if (this.age >= 0 && this.age < 18) {
      this.msg = this.uname + ' is under 18.';
    } else if (this.age == 18) {
      this.msg = this.uname + ' is 18 years old.';
    } else if (this.age > 18) {
      this.msg = this.uname + ' is adult.';
    } else {
      this.msg = 'Invaild age.';
    }
  }
}
