import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
})
export class ProductManagementComponent implements OnInit {
  constructor(private logService: LogService) {}

  ngOnInit(): void {}
  loglist: string[] = [];
  doAdd() {
    let action = 'Add product';
    this.loglist.push(this.logService.doLog(action));
  }
  doDelete() {
    let action = 'Delete product';
    this.loglist.push(this.logService.doLog(action));
  }
}
