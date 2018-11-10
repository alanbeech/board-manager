import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boardType'
})
export class BoardTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0:
        return '#2minutebeachclean';
      case 1:
        return '#2minutelitterpick';
      case 2:
        return '#2minutestreetclean';
    }
    return value;
  }

}
