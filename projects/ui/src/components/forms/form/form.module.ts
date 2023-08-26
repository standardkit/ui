import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SkFormComponent } from './form.component';

@NgModule({
  declarations: [SkFormComponent],
  exports: [SkFormComponent],
  imports: [ReactiveFormsModule],
})
export class SkFormModule {}
