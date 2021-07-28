import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AllgamesComponent } from "./allgames/allgames.component";
import { GamesdetailsComponent } from "./gamesdetails/gamesdetails.component";

const routes:Routes=[
    {path:'',component:AllgamesComponent},
    {path:'games-details',component:GamesdetailsComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class gamesRouting{}