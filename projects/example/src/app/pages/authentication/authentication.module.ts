import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkTextInputModule,
  UiBar,
  UiButton,
  UiCard,
  UiField,
  UiForm,
  UiLabel,
  UiLink,
  UiPasswordInput,
} from '@standardkit/ui';
import { LoginPage } from './login';

@NgModule({
  imports: [
    SkTextInputModule,
    ReactiveFormsModule,
    UiButton,
    UiForm,
    UiCard,
    UiBar,
    UiLink,
    UiField,
    UiLabel,
    UiPasswordInput,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthenticationModule {}
