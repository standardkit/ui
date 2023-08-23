import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxInputPage } from './checkbox-input';
import { SkCheckboxInputModule, SkButtonModule, SkTopBarModule, SkColumnModule, SkRowModule } from '@standardkit/ui';

const PAGES: any[] = [CheckboxInputPage];

@NgModule({
  imports: [ReactiveFormsModule, SkTopBarModule, SkCheckboxInputModule, SkButtonModule, SkColumnModule, SkRowModule],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
