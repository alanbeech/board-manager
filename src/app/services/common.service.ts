import {Injectable} from '@angular/core';
import {Status} from '../status.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
  }

  getStatusTypes(): Status[] {
    return [
      {value: '0', viewValue: 'Order Placed'},
      {value: '1', viewValue: 'Specification Agreed'},
      {value: '2', viewValue: 'Payment Received'},
      {value: '3', viewValue: 'In Production'},
      {value: '4', viewValue: 'Build Complete'},
      {value: '5', viewValue: 'Delivered'},
      {value: '100', viewValue: 'Launched'},
      {value: '101', viewValue: 'On Display'},
      {value: '102', viewValue: 'In'}
    ];
  }
}
