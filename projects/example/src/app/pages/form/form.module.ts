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
  SkLabelModule,
  SkTextInputModule,
  SkInputDescriptionModule,
  SkRadioInputModule,
  SkRadioOptionModule,
  SkAdvancedRadioOptionModule,
  SkBottomBarModule,
  SkNumberInputModule,
} from '@standardkit/ui';

const PAGES: any[] = [CheckboxInputPage, FormPage];

@NgModule({
  imports: [
    ReactiveFormsModule,
    SkAdvancedRadioOptionModule,
    SkBottomBarModule,
    SkBreadcrumbsModule,
    SkButtonModule,
    SkCardModule,
    SkCheckboxInputModule,
    SkColumnModule,
    SkFieldGroupModule,
    SkFieldModule,
    SkFormModule,
    SkFormSectionTitleModule,
    SkInputDescriptionModule,
    SkLabelModule,
    SkRadioInputModule,
    SkRadioOptionModule,
    SkRowModule,
    SkTextInputModule,
    SkTopBarModule,
    SkNumberInputModule,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
