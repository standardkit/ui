import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({ templateUrl: 'login.page.html', standalone: false })
export class LoginPage {
  public form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private router: Router) {}

  public onSubmit(): void {
    this.router.navigate(['/']);
  }
}
