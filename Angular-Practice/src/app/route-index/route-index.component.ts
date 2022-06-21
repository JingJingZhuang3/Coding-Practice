import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-index',
  templateUrl: './route-index.component.html',
  styleUrls: ['./route-index.component.css']
})
export class RouteIndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  // 脚本跳转
  jump(){
    this.router.navigateByUrl('/plist')
  }
}
