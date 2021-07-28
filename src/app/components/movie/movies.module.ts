import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moviesRouting } from './movies.routing';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatMenuModule} from '@angular/material/menu'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FilterPipe } from './movies/filter.pipe'
import { NgwWowModule } from 'ngx-wow';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
@NgModule({
  declarations: [MoviesComponent,MovieDetailsComponent, FilterPipe],
  imports: [
    CommonModule,
    moviesRouting,
    FormsModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatAutocompleteModule,
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
export class MoviesModule { }
export function LoaderFactory( http:HttpClient){
  return new TranslateHttpLoader(http,'../../../assets/i18n/','.json')
}