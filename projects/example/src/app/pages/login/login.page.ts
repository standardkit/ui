import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

@Component({
  imports: [
    UiCard,
    UiForm,
    UiField,
    UiLabel,
    UiTextInput,
    UiPasswordInput,
    UiButton,
    UiBar,
    UiLink,
    ReactiveFormsModule,
  ],
  templateUrl: 'login.page.html',
})
export class LoginPage {
  public form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private router: Router) {}

  public onSubmit(): void {
    void this.router.navigate(['/']);
  }
}
