import { NgModule } from '@angular/core';
import { CommonModule } from './common';
import { HomePage } from './home';

@NgModule({
  imports: [CommonModule],
  declarations: [HomePage],
  exports: [HomePage],
})
export class PagesModule {}
