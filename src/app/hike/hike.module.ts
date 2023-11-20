import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HikeRoutingModule } from './hike-routing.module';
import { ListHikeComponent } from './list-hike/list-hike.component';
import { AddHikeComponent } from './add-hike/add-hike.component';
import { EditHikeComponent } from './edit-hike/edit-hike.component';
import { DetailHikeComponent } from './detail-hike/detail-hike.component';

@NgModule({
  declarations: [
    ListHikeComponent,
    DetailHikeComponent,
    AddHikeComponent,
    EditHikeComponent,
  ],
  imports: [CommonModule, HikeRoutingModule],
})
export class HikeModule {}
