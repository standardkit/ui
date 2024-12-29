import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ui-stepper-item',
  templateUrl: 'stepper-item.component.html',
  styleUrl: 'stepper-item.component.scss',
  imports: [RouterLink],
})
export class UiStepperItem {
  @Input() public name: string = '';
  @Input() public route?: string;
  @Input() public isActive: boolean = false;

  public index: number = 0;
  public isLast: boolean = false;
}
