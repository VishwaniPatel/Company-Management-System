import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLogo'
})
export class NameLogoPipe implements PipeTransform {
  transform(value:any): string {
    value = value.toUpperCase();
    const companyName = value.split(' ');
    const nameLogo = companyName[0].charAt(0) + companyName[1].charAt(0);
    return nameLogo;
  }
}
