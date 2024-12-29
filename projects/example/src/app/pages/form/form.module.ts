import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkBottomBarModule,
  SkColumnModule,
  SkPasswordInputModule,
  SkRowModule,
  SkSelectInputModule,
  SkSelectOptionModule,
  SkTextareaInputModule,
  SkTextInputModule,
  SkTimeInputModule,
  SkTopBarModule,
  UiAdvancedRadioOption,
  UiBreadcrumbs,
  UiButton,
  UiCard,
  UiCheckboxInput,
  UiDateInput,
  UiField,
  UiFieldGroup,
  UiFileInput,
  UiForm,
  UiFormSectionTitle,
  UiInputDescription,
  UiLabel,
  UiMultiSelectInput,
  UiNumberInput,
  UiRadioInput,
  UiRadioOption,
} from '@standardkit/ui';
import { CheckboxInputPage } from './checkbox-input';
import { FormPage } from './form';

const PAGES: any[] = [CheckboxInputPage, FormPage];

@NgModule({
  imports: [
    NgForOf,
    ReactiveFormsModule,
    SkBottomBarModule,
    UiButton,
    SkColumnModule,
    SkPasswordInputModule,
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
    UiAdvancedRadioOption,
    UiRadioInput,
    UiRadioOption,
    UiCheckboxInput,
    UiDateInput,
    UiFieldGroup,
    UiField,
    UiFileInput,
    UiFormSectionTitle,
    UiInputDescription,
    UiLabel,
    UiMultiSelectInput,
    UiNumberInput,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
