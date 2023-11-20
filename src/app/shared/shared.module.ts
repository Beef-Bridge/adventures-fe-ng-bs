import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DateDayJsPipe } from './pipes/date-day-js.pipe';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    TemplateComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    DateDayJsPipe,
    TableComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [TemplateComponent, DateDayJsPipe, TableComponent],
})
export class SharedModule {}
