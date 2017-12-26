import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNow'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    /*
    if(args ==='asc')
    {
      return value.sort(function(a, b){return a-b});
    }    
    else if(args === 'dsc'){
      return value.sort(function(a, b){return a-b}).reverse();
    }
    */
    if(args ==='asc')
    {
      return value.sort();
    }    
    else if(args === 'dsc'){
      return value.sort().reverse();
    }
    
  }

}
