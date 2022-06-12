import { Pipe } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe {
  // pipe core method: transform()
  transform(val: number, lang = 'en') {
    if (lang == 'zh') {
      if (val == 1) {
        return '男';
      } else if (val == 0) {
        return '女';
      } else {
        return '未知';
      }
    } else {
      if (val == 1) {
        return 'Male';
      } else if (val == 0) {
        return 'Female';
      } else {
        return 'Unknown';
      }
    }
  }
}
