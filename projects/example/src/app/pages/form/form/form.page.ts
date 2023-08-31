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
    text5: new FormControl(),
    password: new FormControl(),
    number: new FormControl(),
    textarea: new FormControl(),
    richText: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    select: new FormControl(),
    select2: new FormControl(),
    multiSelect: new FormControl(['Paris', 'Tokyo']),
    multiSelect2: new FormControl(),
    multiSelect3: new FormControl(),
    files: new FormControl(),
    radio: new FormControl(),
    radio2: new FormControl(),
    radio3: new FormControl(),
    radio4: new FormControl(),
  });

  public cities: string[] = [
    'New York',
    'Paris',
    'Amsterdam',
    'Berlin',
    'Cape Town',
    'Beijing',
    'Las Vegas',
    'Mexico City',
    'London',
    'Washington DC',
    'Tokyo',
    'Jerusalem',
    'Bangkok',
    'Prague',
    'Munich',
    'Vienna',
    'Madrid',
    'Rome',
    'Brussels',
    'Barcelona',
    'Istanbul',
    'Rio de Janeiro',
    'Hong Kong',
    'Sao Paolo',
    'Sydney',
    'Budapest',
    'Buenos Aires',
    'Cairo',
    'Toronto',
    'Athens',
    'Edinburgh',
    'Dublin',
    'Singapore',
    'Melbourne',
    'Kathmandu',
    'San Francisco',
    'Los Angeles',
    'Kyoto',
    'Havana',
  ];

  public onSubmit(): void {
    console.log('form submitted', this.form.value);
  }
}
