import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailHikeComponent } from './detail-hike/detail-hike.component';

const hikeRoutes: Routes = [
  { path: 'randonnee/:id', component: DetailHikeComponent },
  // { path: 'randonnee/add', component: AddHikeComponent }
  // { path: 'randonnee/edit/:id', component: EditHikeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(hikeRoutes)],
  exports: [RouterModule],
})
export class HikeRoutingModule {}
