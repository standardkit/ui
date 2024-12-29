import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkPasswordInputModule,
  SkTextInputModule,
  UiBar,
  UiButton,
  UiCard,
  UiField,
  UiForm,
  UiLabel,
  UiLink,
} from '@standardkit/ui';
import { LoginPage } from './login';

@NgModule({
  imports: [
    SkTextInputModule,
    ReactiveFormsModule,
    SkPasswordInputModule,
    UiButton,
    UiForm,
    UiCard,
    UiBar,
    UiLink,
    UiField,
    UiLabel,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthenticationModule {}
