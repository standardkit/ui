import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxInputPage } from './checkbox-input';
import { CheckboxInputModule, SkButtonModule, TopBarModule } from '@standardkit/ui';

const PAGES: any[] = [CheckboxInputPage];

@NgModule({
  imports: [TopBarModule, CheckboxInputModule, ReactiveFormsModule, SkButtonModule],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
