import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailHikeComponent } from './detail-hike/detail-hike.component';
import { ListHikeComponent } from './list-hike/list-hike.component';
import { AddHikeComponent } from './add-hike/add-hike.component';
import { EditHikeComponent } from './edit-hike/edit-hike.component';

const hikeRoutes: Routes = [
  { path: 'randonnees', component: ListHikeComponent },
  { path: 'randonnee/:id', component: DetailHikeComponent },
  { path: 'randonnee/ajouter', component: AddHikeComponent },
  { path: 'randonnee/editer/:id', component: EditHikeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(hikeRoutes)],
  exports: [RouterModule],
})
export class HikeRoutingModule {}
