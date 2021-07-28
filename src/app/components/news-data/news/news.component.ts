import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import {TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
   currentLang:string
  constructor(public ServiceService:ServiceService,public translate:TranslateService) { 
   this.currentLang=localStorage.getItem('currentLanguage') || 'en'
   this.translate.use(this.currentLang)
  }

  ngOnInit(): void {
    this.getNews()
    // this.filterNews()
    console.log(this.filtered)
  }
  allNews:any[]=[]
  categories:any
  searchKey:any
  getNews(){
    this.ServiceService.getNews().subscribe((res)=>{
      this.allNews=res.articles
      this.categories=res.sourceCategory
    })
  }
  filtered:any[]=[]
  f:boolean=true
  filterNews(){
    this.filtered=this.allNews.filter(res => res.title.toLowerCase().includes(this.searchKey.toLowerCase()))
     if(this.filtered.length == 0){
     this.f=false
     }
  }
 

}
