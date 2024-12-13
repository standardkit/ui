import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SkBarModule,
  SkButtonModule,
  SkCardModule,
  SkFieldModule,
  SkLabelModule,
  SkLinkModule,
  SkPasswordInputModule,
  SkTextInputModule,
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
    SkButtonModule,
    SkLinkModule,
    SkBarModule,
    UiForm,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthenticationModule {}
