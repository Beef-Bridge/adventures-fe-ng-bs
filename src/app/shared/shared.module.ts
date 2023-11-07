import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TemplateComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [TemplateComponent],
})
export class SharedModule {}
