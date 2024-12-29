import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkFieldModule,
  SkLabelModule,
  SkPasswordInputModule,
  SkTextInputModule,
  UiBar,
  UiButton,
  UiCard,
  UiForm,
  UiLink,
} from '@standardkit/ui';
import { LoginPage } from './login';

@NgModule({
  imports: [
    SkFieldModule,
    SkLabelModule,
    SkTextInputModule,
    ReactiveFormsModule,
    SkPasswordInputModule,
    UiButton,
    UiForm,
    UiCard,
    UiBar,
    UiLink,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthenticationModule {}
