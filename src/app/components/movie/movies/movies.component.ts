import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServiceService } from 'src/app/services/service.service';
import { Movie } from './movie.modal';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
   currentLang:string
  constructor(public ServiceService:ServiceService,public translate:TranslateService) {
    this.currentLang=localStorage.getItem('currentLanguage') || 'en'
    this.translate.use(this.currentLang)
   }
  imagePrefix:string="https://image.tmdb.org/t/p/w500/";
  panelOpenState = false;

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(()=>{
      console.log(this.translate)
    })
    this.getData()
    // this.filterData()
  }
  allMovies:Movie[]=[]
  getData(){
   this.ServiceService.getMovies(this.ServiceService.currentPage).subscribe((res)=>{
     this.allMovies=res.results
   })
  }
  searchKey:any
  filtered:any[]=[]
  filterData(){
    console.log("this.allMovies",this.allMovies)
    this.filtered=this.allMovies.filter((res:any) => res.title + '' == this.searchKey + '')
    console.log("this.filtered",this.filtered)
  }
  sortedItem:any

sort() {
  this.f=true
  switch (this.sortedItem) {
    case "Popularity Ascending": {
      this.allMovies = this.allMovies.sort(
        (low, high) => low.popularity - high.popularity
      );
      break;
    }
    case "Popularity Descending": {
      this.allMovies = this.allMovies.sort(
        (low, high) => high.popularity - low.popularity
      );
      break;
    }

    case "Rating Ascending": {
      this.allMovies = this.allMovies.sort(
        (low, high) => low.vote_average - high.vote_average
      );
      break;
    }
    case "Rating Descending": {
      this.allMovies = this.allMovies.sort(
        (low, high) => high.vote_average - low.vote_average
      );
      break;
    }

    // case "Release date Ascending": {
    //   this.allMovies = this.allMovies.sort((low, high) => high.release_date.toLowerCase() < low.release_date.toLowerCase() ? 1 : -1)

    //   break;
    // }
    // case "Release date Descending": {
    //   this.allMovies = this.allMovies.sort((low, high) => high.release_date.toLowerCase() > low.release_date.toLowerCase() ? 1 : -1)

    //   break;
    // }
    case "Title [Z-A]": {
      console.log("allMovies = ",this.allMovies)
      this.allMovies = this.allMovies.sort((low, high) => high.title.trim().toLowerCase() > low.title.trim().toLowerCase() ? 1 : -1)
      break;
    }
    case "Title [A-Z]": {
      this.allMovies = this.allMovies.sort((low, high) => high.title.trim().toLowerCase() < low.title.trim().toLowerCase() ? 1 : -1)
      break;
    }

  }
    console.log("this.allMovies",this.allMovies)
  return this.allMovies;
}
language:any
allFiltered:any[]=[]
f:boolean=true
filterByLanguage(){
  this.allFiltered=this.allMovies.filter(res => res.original_language+'' == this.language+'')
  this.f=false
}
pages:number[]=[1,2,3,4,5,6,7,8];
// currentPage:number=1
changePage(num:any){
this.ServiceService.currentPage=num
this.ServiceService.getMovies(this.ServiceService.currentPage).subscribe((res)=>{
  this.allMovies=res.results
})
}


}
