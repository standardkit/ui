import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxInputPage } from './checkbox-input';
import { FormPage } from './form';
import {
  SkCheckboxInputModule,
  SkButtonModule,
  SkTopBarModule,
  SkColumnModule,
  SkRowModule,
  SkBreadcrumbsModule,
  SkFormModule,
  SkFormSectionTitleModule,
  SkCardModule,
  SkFieldGroupModule,
  SkFieldModule,
  LabelModule,
  TextInputModule,
  InputDescriptionModule,
} from '@standardkit/ui';

const PAGES: any[] = [CheckboxInputPage, FormPage];

@NgModule({
  imports: [
    ReactiveFormsModule,
    SkTopBarModule,
    SkCheckboxInputModule,
    SkButtonModule,
    SkColumnModule,
    SkRowModule,
    SkBreadcrumbsModule,
    SkFormModule,
    SkFormSectionTitleModule,
    SkCardModule,
    SkFieldGroupModule,
    SkFieldModule,
    LabelModule,
    TextInputModule,
    InputDescriptionModule,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
