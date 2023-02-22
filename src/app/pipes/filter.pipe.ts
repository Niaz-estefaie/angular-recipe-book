import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string) {
    if (value.length === 0) {
      return value;
    }
    let resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray = [...resultArray, item];
      }
      return resultArray;
    }
  }
}
