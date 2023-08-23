import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-stepper-item',
  templateUrl: 'stepper-item.component.html',
  styleUrls: ['stepper-item.component.scss'],
})
export class SkStepperItemComponent {
  @Input() public name: string = '';
  @Input() public route?: string;
  @Input() public isActive: boolean = false;

  public index: number = 0;
  public isLast: boolean = false;
}
