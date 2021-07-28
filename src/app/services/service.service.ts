import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  currentPage:number=1
  globalColor:any="rgb(2, 13, 34)"
  overlayColor:any="rgba(0, 9, 24, 0.5)"
  boldColor:any="rgb(3, 20, 51)"
  constructor(private http:HttpClient,public translate:TranslateService) {
    // localStorage.setItem("globalColor",this.globalColor)
    // localStorage.setItem("overlayColor",this.overlayColor)
    // localStorage.setItem("boldColor",this.boldColor)
   }
  getMovies(pageNumber:any):Observable<any>{
   return this.http.get("https://api.themoviedb.org/3/trending/all/day?api_key=a631b24dc97d4274715c5fa6b5a60321&page="+pageNumber)
  }
  getSourceVideo(id:any):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a631b24dc97d4274715c5fa6b5a60321&language=en-US`)
  }
  getNews():Observable<any>{
    return this.http.get(`assets/newsapi.json`)
  }
  getPerson():Observable<any>{
   return this.http.get('https://api.themoviedb.org/3/trending/person/day?api_key=a631b24dc97d4274715c5fa6b5a60321')
  }
  getMoviesById(id:any,pageNumber:any){
   return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a631b24dc97d4274715c5fa6b5a60321&language=en-US&page=${pageNumber}`)
  }
  getVideosById(id:any){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=a631b24dc97d4274715c5fa6b5a60321`)

  }
  changeCurrentLang(language:any){
    this.translate.use(language)
    localStorage.setItem("currentLanguage",language)
   }

   getGames():Observable<any>{
     return this.http.get(`assets/gamesapi.json`)
   }
}
