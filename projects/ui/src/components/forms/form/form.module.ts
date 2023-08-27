import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SkFormComponent } from './form.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [SkFormComponent],
  exports: [SkFormComponent],
})
export class SkFormModule {}
