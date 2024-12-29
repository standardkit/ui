import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkBarModule,
  SkFieldModule,
  SkLabelModule,
  SkLinkModule,
  SkPasswordInputModule,
  SkTextInputModule,
  UiButton,
  UiCard,
  UiForm,
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
    SkLinkModule,
    SkBarModule,
    UiForm,
    UiCard,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthenticationModule {}
