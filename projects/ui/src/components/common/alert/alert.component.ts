import { Component, Input } from '@angular/core';
import { StyleType } from '@standardkit/core';
import { Style } from '../../../constants';

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
