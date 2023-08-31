import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication';
import { CommonModule } from './common';
import { CoreModule } from './core';
import { FormModule } from './form';
import { HomeModule } from './home';
import { TableModule } from './table';

@NgModule({
  imports: [AuthenticationModule, CommonModule, CoreModule, FormModule, HomeModule, TableModule],
})
export class PagesModule {}
