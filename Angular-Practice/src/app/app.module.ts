import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeComponent1Component } from './practice-component1/practice-component1.component';
import { PracticeComponent2Component } from './practice-component2/practice-component2.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { TodolistComponent } from './todolist/todolist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { GenderPipe } from './gender.pipe';
import { ZzmmPipe } from './zzmm.pipe';
import { ProductManagementComponent } from './product-management/product-management.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadProductsComponent } from './load-products/load-products.component';
import { ParentBlogComponent } from './parent-blog/parent-blog.component';
import { Chlid1ModifyComponent } from './chlid1-modify/chlid1-modify.component';
import { Chlid2PhotoComponent } from './chlid2-photo/chlid2-photo.component';
@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent1Component,
    PracticeComponent2Component,
    CustomDirectiveDirective,
    TodolistComponent,
    EmployeelistComponent,
    GenderPipe,
    ZzmmPipe,
    ProductManagementComponent,
    LoadProductsComponent,
    ParentBlogComponent,
    Chlid1ModifyComponent,
    Chlid2PhotoComponent,
  ],
  // use ngModule must import FormsModule first
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
