import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase',
  standalone: true
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
      return value.toUpperCase();
  }

}
