import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingComponent } from './drawing.component';
import { DrawingRouting } from './drawing.routing';
import { NgwWowModule } from 'ngx-wow';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core'
import{TranslateHttpLoader} from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [DrawingComponent],
  imports: [
    CommonModule,
    DrawingRouting,
    NgwWowModule,
    TranslateModule.forRoot({
      loader:{
      provide:TranslateLoader,
      useFactory:LoaderFactory,
      deps:[HttpClient]
      }
    })
  ]
})
export class DrawingModule { }
export function LoaderFactory( http:HttpClient){
  return new TranslateHttpLoader(http,'../../../assets/i18n/','.json')
}