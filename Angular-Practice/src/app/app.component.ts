import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'router';
  // ngClass => decided the css style be display or not
  bindingButStyle = {
    btn: false,
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

  blogButStyle={
    btn: false,
  }

  routeButStyle={
    btn: true,
  }

  navButton(nav: string) {
    if (nav == 'dataBinding') {
      this.title = nav;
      this.bindingButStyle.btn = true;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = false;
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = false;
      this.loadProductButStyle.btn = false;
      this.blogButStyle.btn=false
      this.routeButStyle.btn=false
    } else if (nav == 'directives') {
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = true;
      this.todoButStyle.btn = false;
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = false;
      this.loadProductButStyle.btn = false;
      this.blogButStyle.btn=false
      this.routeButStyle.btn=false
    } else if (nav == 'todolist') {
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = true;
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = false;
      this.loadProductButStyle.btn = false;
      this.blogButStyle.btn=false
      this.routeButStyle.btn=false
    } else if (nav == 'employeelist') {
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = false;
      this.employeelistButStyle.btn = true;
      this.productManageButStyle.btn = false;
      this.loadProductButStyle.btn = false;
      this.blogButStyle.btn=false
      this.routeButStyle.btn=false
    } else if (nav == 'productManage') {
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = false;
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = true;
      this.loadProductButStyle.btn = false;
      this.blogButStyle.btn=false
      this.routeButStyle.btn=false
    } else if (nav == 'loadProduct') {
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = false;
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = false;
      this.loadProductButStyle.btn = true;
      this.blogButStyle.btn=false
      this.routeButStyle.btn=false
    }else if (nav=='Blog'){
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = false;
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = false;
      this.loadProductButStyle.btn = false;
      this.blogButStyle.btn=true
      this.routeButStyle.btn=false
    }else if (nav=='router'){
      this.title = nav;
      this.bindingButStyle.btn = false;
      this.directiveButStyle.btn = false;
      this.todoButStyle.btn = false;
      this.employeelistButStyle.btn = false;
      this.productManageButStyle.btn = false;
      this.loadProductButStyle.btn = false;
      this.blogButStyle.btn=false;
      this.routeButStyle.btn=true
    }
  }
}
