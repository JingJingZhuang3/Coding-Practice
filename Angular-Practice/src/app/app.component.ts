import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dataBinding';
  // bindingButStyle = {
  //   backgroundColor: '#383',
  //   color: '#fff',
  //   'border-color': '#252',
  // };
  // directiveButStyle = {};
  bindingButStyle = {
    btn: true,
  };
  directiveButStyle = {
    btn: false,
  };
  todoButStyle = {
    btn: false,
  };
  navButton(nav: string) {
    if (nav == 'dataBinding') {
      this.title = nav;
      // this.directiveButStyle = {};
      // this.bindingButStyle = {
      //   backgroundColor: '#383',
      //   color: '#fff',
      //   'border-color': '#252',
      // };
      this.bindingButStyle.btn = true;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = false;
    } else if (nav == 'directives') {
      this.title = nav;
      // this.bindingButStyle = {
      //   backgroundColor: '',
      //   color: '',
      //   'border-color': '',
      // };
      // this.directiveButStyle = {
      //   backgroundColor: '#383',
      //   color: '#fff',
      //   'border-color': '#252',
      // };
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = true;
      this.todoButStyle.btn = false;
    } else if (nav == 'todolist') {
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = true;
    }
  }
}
