import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputErrorComponent } from './input-error.component';

@NgModule({
  declarations: [InputErrorComponent],
  exports: [InputErrorComponent],
  imports: [NgIf],
})
export class InputErrorModule {}
