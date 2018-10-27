import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusDescription'
})
export class StatusDescriptionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
