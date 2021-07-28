import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../../services/service.service'
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private ServiceService:ServiceService) { }

  ngOnInit(): void {
    this.getId()
    this.getNews()
  }

  id:any
  getId(){
    this.activatedRoute.paramMap.subscribe((res)=>{
     this.id=res.get('id')
    })
  }
  news:any
  getNews(){
  this.ServiceService.getNews().subscribe((res)=>{
    this.news=res.articles[this.id]
  })
  }

}
