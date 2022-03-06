import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dataBinding';
  bindingButStyle = {
    backgroundColor: '#383',
    color: '#fff',
    'border-color': '#252',
  };
  directiveButStyle = {};
  navButton(nav: string) {
    if (nav == 'dataBinding') {
      this.title = nav;
      this.directiveButStyle = {};
      this.bindingButStyle = {
        backgroundColor: '#383',
        color: '#fff',
        'border-color': '#252',
      };
    } else if (nav == 'directives') {
      this.title = nav;
      this.bindingButStyle = {
        backgroundColor: '',
        color: '',
        'border-color': '',
      };
      this.directiveButStyle = {
        backgroundColor: '#383',
        color: '#fff',
        'border-color': '#252',
      };
    }
  }
}
