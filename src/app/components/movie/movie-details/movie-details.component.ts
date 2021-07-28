import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import {TranslateService} from '@ngx-translate/core'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  imagePrefix:string="https://image.tmdb.org/t/p/w500/";
   currentLang:string
  constructor(private activatedRoute:ActivatedRoute,private sanitizer: DomSanitizer ,private ServiceService:ServiceService,public translate:TranslateService) {
    this.currentLang=localStorage.getItem("currentLanguage") || 'en'
    this.translate.use(this.currentLang)
   }

  ngOnInit(): void {
    this.getId()
    this.getAllData()
     this.getVideos()
     this.getSourceVideo()
  }
  id:any
  getId(){
    this.activatedRoute.paramMap.subscribe((res)=>{
     this.id=res.get('id')
    })
  }
  movieDetails:any
  getAllData(){
  
  this.ServiceService.getMoviesById(this.id,this.ServiceService.currentPage).subscribe((res)=>{
       this.movieDetails=res
     })
     console.log("this.ServiceService.currentPage",this.ServiceService.currentPage)
  }
  VideosDetails:any
  getVideos(){
    this.ServiceService.getVideosById(this.id).subscribe((res:any)=>{
      this.VideosDetails=res
    })
    console.log("this.VideosDetails",this.VideosDetails)
  }
  videoSrc:any
  VideoUrl:any
  getSourceVideo(){
    this.ServiceService.getSourceVideo(this.id).subscribe((res:any)=>{
      this.videoSrc=res
      this.VideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoSrc.results[0].key}`)
      console.log("this.VideoUrl",this.VideoUrl)
    })
  }
}
