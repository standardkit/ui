import { NgForOf } from '@angular/common';
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
  SkDateInputModule,
  SkFileInputModule,
  SkSelectInputModule,
  SkSelectOptionModule,
  SkMultiSelectInputModule,
  SkPasswordInputModule,
  SkTextareaInputModule,
  SkTimeInputModule,
} from '@standardkit/ui';

const PAGES: any[] = [CheckboxInputPage, FormPage];

@NgModule({
  imports: [
    NgForOf,
    ReactiveFormsModule,
    SkAdvancedRadioOptionModule,
    SkBottomBarModule,
    SkBreadcrumbsModule,
    SkButtonModule,
    SkCardModule,
    SkCheckboxInputModule,
    SkColumnModule,
    SkDateInputModule,
    SkFieldGroupModule,
    SkFieldModule,
    SkFileInputModule,
    SkFormModule,
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
  ],
  declarations: PAGES,
  exports: PAGES,
})
export class FormModule {}
