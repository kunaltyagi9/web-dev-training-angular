import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(user : any, term : any): any {
    if(term === undefined) return user;
    return user.filter(data=>{
      return data.username.toLowerCase().includes(term.toLowerCase());
    })
  }

}
