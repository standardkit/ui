import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'form.page.html' })
export class FormPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Form' }, { name: 'Form' }];

  public form: FormGroup = new FormGroup({
    text: new FormControl(),
    textTwo: new FormControl(),
  });

  public onSubmit(): void {
    console.log('form submitted');
  }
}
