import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentLang:string

  constructor(public translate:TranslateService,public ServiceService:ServiceService) { 
   this.currentLang=localStorage.getItem('currentLanguage') || 'en'
    this.translate.use(this.currentLang)

    this.ServiceService.globalColor=localStorage.getItem('globalColor')
    this.ServiceService.overlayColor=localStorage.getItem('overlayColor')
    this.ServiceService.boldColor=localStorage.getItem('boldColor')
    
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(()=>{
      console.log(this.translate)
    })
  }
  @HostListener('window:scroll',[])
  onWindowScroll(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      document.getElementById('navbar')?.classList.add('pos')
    }else{
      document.getElementById('navbar')?.classList.remove('pos')
    }
  }
  changeCurrentLang(language:any){
    this.translate.use(language)
    localStorage.setItem("currentLanguage",language)
   }
   changeTheme(color:string,overlayColor:string,boldColor:string){
    this.ServiceService.globalColor=color
    this.ServiceService.overlayColor=overlayColor
    this.ServiceService.boldColor=boldColor
    localStorage.setItem("globalColor",this.ServiceService.globalColor)
    localStorage.setItem("overlayColor",this.ServiceService.overlayColor)
    localStorage.setItem("boldColor",this.ServiceService.boldColor)

   }

}
