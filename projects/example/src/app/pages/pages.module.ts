import { NgModule } from '@angular/core';
import { CommonModule } from './common';
import { CoreModule } from './core';
import { HomePage } from './home';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [HomePage],
  exports: [HomePage],
})
export class PagesModule {}
