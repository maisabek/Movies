import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-allgames',
  templateUrl: './allgames.component.html',
  styleUrls: ['./allgames.component.scss']
})
export class AllgamesComponent implements OnInit {

  currentLang:string
  constructor(public ServiceService:ServiceService,public translate:TranslateService) {
    this.currentLang=localStorage.getItem('currentLanguage') || 'en'
    this.translate.use(this.currentLang)
   }
  ngOnInit(): void {
    this.getGames()
    this.translate.onLangChange.subscribe(()=>{
      console.log(this.translate)
    })
  }
  allGames:any
  getGames(){
    this.ServiceService.getGames().subscribe((res)=>{
     this.allGames=res
    })
  }

}
