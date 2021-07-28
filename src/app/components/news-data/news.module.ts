import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { newsRouting } from './news.routing';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu'
import {TranslateModule,TranslateLoader} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import {HttpClient} from '@angular/common/http'
@NgModule({
  declarations: [
    NewsComponent,
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    newsRouting,
    FormsModule,
    MatMenuModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpFactoryLoader,
         deps:[HttpClient]
      }
    })
  ]
})
export class NewsModule { }
export function HttpFactoryLoader(http:HttpClient){
return new TranslateHttpLoader(http,'../../../assets/i18n/',".json")
}
