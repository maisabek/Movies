import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../../src/app/components/home/home.component'
const routes: Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'drawing',loadChildren:()=>import('../app/components/drawing/drawing.module').then(m => m.DrawingModule)},
  {path:'movie',loadChildren:()=>import('./components/movie/movies.module').then(m=>m.MoviesModule)},
  {path:'news',loadChildren:()=>import('./components/news-data/news.module').then(m=>m.NewsModule)},
  {path:'games',loadChildren:()=>import('./components/games/games.module').then(m=>m.GamesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
