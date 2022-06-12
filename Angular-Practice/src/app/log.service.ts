import { Injectable } from '@angular/core';
// dependency injection: service should be injectable
@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}
  // execute log record
  doLog(action: any) {
    let uname = 'Admin';
    let time = new Date();
    return `Manager: ${uname} Time: ${time} Action: ${action}`;
  }
}
