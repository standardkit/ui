import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkInputErrorComponent } from './input-error.component';

@NgModule({
  imports: [NgIf],
  declarations: [SkInputErrorComponent],
  exports: [SkInputErrorComponent],
})
export class SkInputErrorModule {}
