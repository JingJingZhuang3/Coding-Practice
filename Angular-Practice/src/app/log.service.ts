import { Injectable } from '@angular/core';
// dependency injection
@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}
  // execute log record
  doLog(action: any) {
    let uname = 'Admin';
    let time = new Date();
    console.log(`Manager: ${uname} Time: ${time} Action: ${action}`);
  }
}
