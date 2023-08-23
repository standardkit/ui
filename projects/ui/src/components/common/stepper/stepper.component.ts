import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { SkStepperItemComponent } from '../stepper-item';

@Component({
  selector: 'sk-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.scss'],
})
export class SkStepperComponent implements AfterContentInit {
  @ContentChildren(SkStepperItemComponent) public items!: QueryList<SkStepperItemComponent>;

  public ngAfterContentInit(): void {
    let index: number = 1;
    this.items.forEach((item: SkStepperItemComponent) => (item.index = index++));
    this.items.last.isLast = true;
  }
}
