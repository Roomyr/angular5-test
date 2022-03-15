import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CardComponent } from '../card/card.component';
import { PostCardDetailComponent } from '../post-card-detail/post-card-detail.component';
import { PostCardComponent } from '../post-card/post-card.component';

const appRoutes: Routes = [
  {
    path: "",
    component: CardComponent
  },
  {
    path: "post",
    component: PostCardComponent
  },
  {
    path: "post/:id",
    component: PostCardDetailComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule { }
