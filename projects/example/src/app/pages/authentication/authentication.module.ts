import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  UiBar,
  UiButton,
  UiCard,
  UiField,
  UiForm,
  UiLabel,
  UiLink,
  UiPasswordInput,
  UiTextInput,
} from '@standardkit/ui';
import { LoginPage } from './login';

@NgModule({
  imports: [
    ReactiveFormsModule,
    UiButton,
    UiForm,
    UiCard,
    UiBar,
    UiLink,
    UiField,
    UiLabel,
    UiPasswordInput,
    UiTextInput,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthenticationModule {}
