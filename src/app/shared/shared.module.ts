import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DateDdMmmPipe } from './pipes/date-dd-mmm.pipe';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    TemplateComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    DateDdMmmPipe,
    TableComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [TemplateComponent, DateDdMmmPipe, TableComponent],
})
export class SharedModule {}
