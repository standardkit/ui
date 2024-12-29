import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkBottomBarModule,
  SkColumnModule,
  SkRowModule,
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
  UiPasswordInput,
  UiRadioInput,
  UiRadioOption,
  UiSelectInput,
  UiSelectOption,
  UiTextareaInput,
  UiTextInput,
  UiTimeInput,
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
    SkRowModule,
    SkTopBarModule,
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
    UiPasswordInput,
    UiSelectInput,
    UiSelectOption,
    UiTextInput,
    UiTextareaInput,
    UiTimeInput,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
