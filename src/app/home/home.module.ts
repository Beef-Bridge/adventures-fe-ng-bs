import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageSidebarComponent } from './homepage-sidebar/homepage-sidebar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomepageComponent, HomepageSidebarComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, HttpClientModule],
})
export class HomeModule {}
