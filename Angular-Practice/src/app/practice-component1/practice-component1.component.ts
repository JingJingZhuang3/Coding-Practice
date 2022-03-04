import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-component1',
  templateUrl: './practice-component1.component.html',
  styleUrls: ['./practice-component1.component.css'],
})
export class PracticeComponent1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  uname: string = 'John Doe';
  age: number = 23;
  cnt: number = 0;
  items = ['Apple', 'Book', 'Cream'];

  Add() {
    this.cnt++;
  }
  Sub() {
    this.cnt--;
  }
}
