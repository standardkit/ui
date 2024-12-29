import { Component, Input } from '@angular/core';
import { Style } from '../../../constants';
import { StyleType } from '../../../types';

@Component({
  selector: 'ui-alert',
  templateUrl: 'alert.component.html',
  styleUrl: 'alert.component.scss',
})
export class UiAlert {
  @Input() public type: StyleType = Style.Error;
  @Input() public hasNoShadow: boolean = false;
}
