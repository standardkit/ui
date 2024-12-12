import { Component } from '@angular/core';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({
  templateUrl: 'stepper.page.html',
  standalone: false,
})
export class StepperPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Stepper' }];
}
