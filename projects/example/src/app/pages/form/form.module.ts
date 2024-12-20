import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkAdvancedRadioOptionModule,
  SkBottomBarModule,
  SkBreadcrumbsModule,
  SkCardModule,
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
  UiButton,
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
    SkBreadcrumbsModule,
    UiButton,
    SkCardModule,
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
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
