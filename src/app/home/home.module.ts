import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageSidebarComponent } from './homepage-sidebar/homepage-sidebar.component';



@NgModule({
  declarations: [
    HomepageComponent,
    HomepageSidebarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
