import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkFieldModule,
  SkLabelModule,
  SkLinkModule,
  SkPasswordInputModule,
  SkTextInputModule,
  UiBar,
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
    UiForm,
    UiCard,
    UiBar,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthenticationModule {}
