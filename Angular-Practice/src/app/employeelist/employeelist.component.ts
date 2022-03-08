import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent implements OnInit {
  constructor() {}
  empList = [
    {
      eid: 101,
      ename: 'liangliang',
      salary: 5000,
      birthday: '10/5/1977',
      gender: 1,
      zzmm: 10,
    },
    {
      eid: 102,
      ename: 'rangrang',
      salary: 6000,
      birthday: '2/9/1975',
      gender: 0,
      zzmm: 20,
    },
    {
      eid: 103,
      ename: 'taotao',
      salary: 7000,
      birthday: '6/15/1970',
      gender: 0,
      zzmm: 20,
    },
  ];
  ngOnInit(): void {}
}
