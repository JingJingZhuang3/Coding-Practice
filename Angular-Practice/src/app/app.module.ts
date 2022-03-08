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

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent1Component,
    PracticeComponent2Component,
    CustomDirectiveDirective,
    TodolistComponent,
    EmployeelistComponent,
    GenderPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
