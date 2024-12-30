import { Component } from '@angular/core';
import {
  BreadcrumbInterface,
  UiBreadcrumbs,
  UiColumn,
  UiRow,
  UiStepper,
  UiStepperItem,
  UiTopBar,
} from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiBreadcrumbs, UiRow, UiColumn, UiStepper, UiStepperItem],
  templateUrl: 'stepper.page.html',
})
export class StepperPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Stepper' }];
}
