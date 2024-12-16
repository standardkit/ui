import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkBarModule,
  SkCardModule,
  SkFieldModule,
  SkLabelModule,
  SkLinkModule,
  SkPasswordInputModule,
  SkTextInputModule,
  UiButton,
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
    SkCardModule,
    UiButton,
    SkLinkModule,
    SkBarModule,
    UiForm,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthenticationModule {}
