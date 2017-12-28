import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(userInfo: any, searchName: any): any {

      if(searchName === undefined){
        return userInfo;
      }

      return userInfo.filter(function(user){
        return user.name.toLowerCase().includes(searchName.toLowerCase());
      });


  }

}
