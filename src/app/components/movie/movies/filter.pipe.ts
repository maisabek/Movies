import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from './movie.modal'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies:Movie[], searchItem:any): Movie[] {
    if(!movies || !searchItem){
      return movies
    }
    return movies.filter((res:any)=>res.overview.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1 ||
    res.title + '' ==searchItem + '' );
  }

}
