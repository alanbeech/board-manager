import { Pipe, PipeTransform } from '@angular/core';
import {Status} from '../../status.interface';
import {CommonService} from '../../services/common.service';

@Pipe({
  name: 'boardStatus'
})
export class BoardStatusPipe implements PipeTransform {

  constructor(private commonService: CommonService) {}

  transform(value: any, args?: any): any {

    // const statusTypes = this.commonService.getStatusTypes();
    //
    // const type = statusTypes.find(t => t.value === value);
    //
    // if (type) {
    //   return type.viewValue;
    // } else {
    //   return value;
    // }
    // //
    switch (value) {
      case 0:
        return 'Order Placed';
      // case 1:
      //   return 'Specification Agreed';
      case 2:
        return 'Payment';
      case 3:
        return 'Production';
      // case 4:
      //   return 'Build Complete';
      case 5:
        return 'Delivered';
      case 100:
        return 'Launched';
      case 101:
        return 'On Display';
      case 6:
        return 'In Storage';
    }
    return value;
  }

}

// Order placed
// Spec agreed (please remove)
// Payment
// Production
// Build complete (please remove)
// Delivered
// Launched
// On display
// In storage
