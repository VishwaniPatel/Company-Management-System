import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLogo'
})
export class NameLogoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
