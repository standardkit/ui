import { NgModule } from '@angular/core';
import { CommonModule } from './common';
import { CoreModule } from './core';
import { FormModule } from './form';
import { HomeModule } from './home';

@NgModule({
  imports: [CommonModule, CoreModule, FormModule, HomeModule],
})
export class PagesModule {}
