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

  employeelistButStyle = {
    btn: false,
  };

  productManageButStyle = {
    btn: false,
  };

  loadProductButStyle = {
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
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = false;
    } else if (nav == 'todolist') {
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = true;
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = false;
      this.loadProductButStyle.btn = false;
    } else if (nav == 'employeelist') {
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = false;
      this.employeelistButStyle.btn = true;
      this.productManageButStyle.btn = false;
      this.loadProductButStyle.btn = false;
    } else if (nav == 'productManage') {
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = false;
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = true;
      this.loadProductButStyle.btn = false;
    } else if ((nav = 'loadProduct')) {
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = false;
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = false;
      this.loadProductButStyle.btn = true;
    }
  }
}
