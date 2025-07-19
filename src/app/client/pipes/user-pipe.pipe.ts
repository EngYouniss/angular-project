import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPipe',
  standalone: true
})
export class UserPipePipe implements PipeTransform {

  transform(value: string): unknown {
    if(!value) {
      return '';
    }
    return '@' + value.toLowerCase();
  }

}
