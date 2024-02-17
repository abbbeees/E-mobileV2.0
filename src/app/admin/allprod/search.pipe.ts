import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null; //check if the Search value is not null
    if(!args) return value;  //check if the value exists .. (args = the input in the search field)

    args = args.toLowerCase();

    return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(args);    
    })
  }

}
