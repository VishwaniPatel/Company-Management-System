import { Pipe, PipeTransform } from '@angular/core';
import { company } from 'src/app/company/company.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

/**
   * filterdata form given list values
   * @param value
   * @param searchData
   * @returns company[]
   */
 transform(value: company[], searchData: string): any {

  if (!searchData) {
    return value;
  }

  searchData = searchData.toLowerCase();

  const data = value.filter((item) => {
    return item.companyName.toLowerCase().indexOf(searchData.toLowerCase()) !== -1;
  })

  return data;
}

}
