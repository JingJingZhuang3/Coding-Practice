import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  constructor() {}
  task: string = '';
  todolist: string[] = [];
  alert: string = '';
  alertStyle = {};
  ngOnInit(): void {}

  addTodo() {
    if (this.task.length != 0) {
      this.todolist.push(this.task);
      this.alert = '';
      this.alertStyle = {};
    } else {
      this.alert = 'Invaild input, try again';
      this.alertStyle = {
        backgroundColor: '#fcc',
        padding: '10px',
        color: '#a33',
      };
    }
  }

  deleteTodo(index: number) {
    this.todolist.splice(index, 1);
  }
}
