import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zzmm', //政治面貌
})
export class ZzmmPipe implements PipeTransform {
  transform(value: number, format = 'short') {
    if (format == 'short') {
      if (value == 10) {
        return '党员';
      } else if (value == 20) {
        return '团员';
      } else if (value == 30) {
        return '群众';
      } else {
        return '未知';
      }
    } else if (format == 'long') {
      if (value == 10) {
        return '中国共产党党员';
      } else if (value == 20) {
        return '中共青团团员';
      } else if (value == 30) {
        return '中国人民群众';
      } else {
        return '未知';
      }
    } else {
      return '未知';
    }
  }
}
