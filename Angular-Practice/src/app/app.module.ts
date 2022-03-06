import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeComponent1Component } from './practice-component1/practice-component1.component';
import { PracticeComponent2Component } from './practice-component2/practice-component2.component';

@NgModule({
  declarations: [AppComponent, PracticeComponent1Component, PracticeComponent2Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
