import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login';
import {
  SkBarModule,
  SkButtonModule,
  SkCardModule,
  SkFieldModule,
  SkFormModule,
  SkLabelModule,
  SkLinkModule,
  SkPasswordInputModule,
  SkTextInputModule,
} from '@standardkit/ui';

@NgModule({
  imports: [
    SkFieldModule,
    SkLabelModule,
    SkTextInputModule,
    ReactiveFormsModule,
    SkFormModule,
    SkPasswordInputModule,
    SkCardModule,
    SkButtonModule,
    SkLinkModule,
    SkBarModule,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthenticationModule {}
