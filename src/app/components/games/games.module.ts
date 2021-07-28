import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from 'src/app/services/service.service';
import { GamesdetailsComponent } from './gamesdetails/gamesdetails.component';
import { AllgamesComponent } from './allgames/allgames.component';
import { gamesRouting } from './games.routing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [GamesdetailsComponent,AllgamesComponent],
  imports: [
    CommonModule,
    gamesRouting,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:LoaderFactory,
        deps:[HttpClient]
      }
    })
  ]
})
export class GamesModule { }
export function LoaderFactory( http:HttpClient){
  return new TranslateHttpLoader(http,'../../../assets/i18n/','.json')
}