import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boardStatus'
})
export class BoardStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0:
        return 'General';
      case 1:
        return 'MoreDetailNeeded';
      case 2:
        return 'InitialStages';
      case 3:
        return 'InProduction';
      case 4:
        return 'AwayForWinter';
      case 5:
        return 'NeedsRepair';
      case 6:
        return 'NotOut';
    }
    return value;
  }

}
