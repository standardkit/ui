import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { SkInputErrorModule } from '../input-error';
import { SkRichTextInputComponent } from './rich-text-input.component';

@NgModule({
  declarations: [SkRichTextInputComponent],
  exports: [SkRichTextInputComponent],
  imports: [FormsModule, NgIf, SkInputErrorModule, QuillModule, ReactiveFormsModule],
})
export class SkRichTextInputModule {}
