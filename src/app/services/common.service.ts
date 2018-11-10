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
      // {value: '1', viewValue: 'Specification Agreed'},
      {value: '2', viewValue: 'Payment'},
      {value: '3', viewValue: 'Production'},
      // {value: '4', viewValue: 'Build Complete'},
      {value: '5', viewValue: 'Delivered'},
      {value: '6', viewValue: 'In Storage'},

      {value: '100', viewValue: 'Launched'},
      {value: '101', viewValue: 'On Display'},

    ];
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
