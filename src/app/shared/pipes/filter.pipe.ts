import { Pipe, PipeTransform } from '@angular/core';
import { company } from 'src/app/company/company.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: company[], searchText: string): any {

    if (!value) return null;
    if (!searchText) return value;

    searchText = searchText.toLowerCase();

    return value.filter(function (item: any) {
        return JSON.stringify(item).toLowerCase().includes(searchText);
    });
}

}
