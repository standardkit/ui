import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { UiStepperItem } from '../stepper-item';

@Component({
  selector: 'ui-stepper',
  templateUrl: 'stepper.component.html',
  styleUrl: 'stepper.component.scss',
})
export class UiStepper implements AfterContentInit {
  @ContentChildren(UiStepperItem) public items!: QueryList<UiStepperItem>;

  public ngAfterContentInit(): void {
    let index: number = 1;
    this.items.forEach((item: UiStepperItem) => (item.index = index++));
    this.items.last.isLast = true;
  }
}
