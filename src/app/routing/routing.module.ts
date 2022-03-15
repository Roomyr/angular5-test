import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CardComponent } from '../card/card.component';

const appRoutes: Routes = [
  {
    path: "",
    component: CardComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule { }
