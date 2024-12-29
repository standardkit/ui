import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkBottomBarModule,
  SkColumnModule,
  SkFieldGroupModule,
  SkFieldModule,
  SkFileInputModule,
  SkFormSectionTitleModule,
  SkInputDescriptionModule,
  SkLabelModule,
  SkMultiSelectInputModule,
  SkNumberInputModule,
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
  UiForm,
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
    SkFieldGroupModule,
    SkFieldModule,
    SkFileInputModule,
    SkFormSectionTitleModule,
    SkInputDescriptionModule,
    SkLabelModule,
    SkMultiSelectInputModule,
    SkNumberInputModule,
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
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
