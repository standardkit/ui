import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'form.page.html' })
export class FormPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Form' }, { name: 'Form' }];

  public form: FormGroup = new FormGroup({
    text: new FormControl(),
    text2: new FormControl(),
    text3: new FormControl(),
    text4: new FormControl(),
    number: new FormControl(),
    date: new FormControl(),
    files: new FormControl(),
    radio: new FormControl(),
    radio2: new FormControl(),
    radio3: new FormControl(),
    radio4: new FormControl(),
  });

  public onSubmit(): void {
    console.log('form submitted', this.form.value);
  }
}
