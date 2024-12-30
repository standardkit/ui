import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  UiAdvancedRadioOption,
  UiBottomBar,
  UiBreadcrumbs,
  UiButton,
  UiCard,
  UiCheckboxInput,
  UiColumn,
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
  UiRow,
  UiSelectInput,
  UiSelectOption,
  UiTextareaInput,
  UiTextInput,
  UiTimeInput,
  UiTopBar,
} from '@standardkit/ui';
import { CheckboxInputPage } from './checkbox-input';
import { FormPage } from './form';

const PAGES: any[] = [CheckboxInputPage, FormPage];

@NgModule({
  imports: [
    NgForOf,
    ReactiveFormsModule,
    UiButton,
    UiRow,
    UiTopBar,
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
    UiBottomBar,
    UiColumn,
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
