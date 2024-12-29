import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkLabelModule,
  SkPasswordInputModule,
  SkTextInputModule,
  UiBar,
  UiButton,
  UiCard,
  UiField,
  UiForm,
  UiLink,
} from '@standardkit/ui';
import { LoginPage } from './login';

@NgModule({
  imports: [
    SkLabelModule,
    SkTextInputModule,
    ReactiveFormsModule,
    SkPasswordInputModule,
    UiButton,
    UiForm,
    UiCard,
    UiBar,
    UiLink,
    UiField,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthenticationModule {}
