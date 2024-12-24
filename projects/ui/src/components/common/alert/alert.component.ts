import { Component, Input } from '@angular/core';
import { Style } from '@lib/constants';
import { StyleType } from '@lib/types';

@Component({
  selector: 'sk-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.scss'],
  standalone: false,
})
export class SkAlertComponent {
  @Input() public type: StyleType = Style.Error;
  @Input() public hasNoShadow: boolean = false;
}
