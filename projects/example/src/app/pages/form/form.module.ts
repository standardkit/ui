import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkAdvancedRadioOptionModule,
  SkBottomBarModule,
  SkCheckboxInputModule,
  SkColumnModule,
  SkDateInputModule,
  SkFieldGroupModule,
  SkFieldModule,
  SkFileInputModule,
  SkFormSectionTitleModule,
  SkInputDescriptionModule,
  SkLabelModule,
  SkMultiSelectInputModule,
  SkNumberInputModule,
  SkPasswordInputModule,
  SkRadioInputModule,
  SkRadioOptionModule,
  SkRowModule,
  SkSelectInputModule,
  SkSelectOptionModule,
  SkTextareaInputModule,
  SkTextInputModule,
  SkTimeInputModule,
  SkTopBarModule,
  UiBreadcrumbs,
  UiButton,
  UiCard,
  UiForm,
} from '@standardkit/ui';
import { CheckboxInputPage } from './checkbox-input';
import { FormPage } from './form';

const PAGES: any[] = [CheckboxInputPage, FormPage];

@NgModule({
  imports: [
    NgForOf,
    ReactiveFormsModule,
    SkAdvancedRadioOptionModule,
    SkBottomBarModule,
    UiButton,
    SkCheckboxInputModule,
    SkColumnModule,
    SkDateInputModule,
    SkFieldGroupModule,
    SkFieldModule,
    SkFileInputModule,
    SkFormSectionTitleModule,
    SkInputDescriptionModule,
    SkLabelModule,
    SkMultiSelectInputModule,
    SkNumberInputModule,
    SkPasswordInputModule,
    SkRadioInputModule,
    SkRadioOptionModule,
    SkRowModule,
    SkSelectInputModule,
    SkSelectOptionModule,
    SkTextInputModule,
    SkTextareaInputModule,
    SkTopBarModule,
    SkTimeInputModule,
    UiForm,
    UiBreadcrumbs,
    UiCard,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
