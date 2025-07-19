import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: string ): unknown {
    switch(value){
      case '1':
        return 'Available';
      case '2':
        return 'Unavailable';
        default:
        return 'Unknown Status';
    }
    return null;
  }

}
