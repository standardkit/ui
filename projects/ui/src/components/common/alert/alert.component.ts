import { Component, Input } from '@angular/core';
import { StyleType, STYLE } from '@standardkit/core';

@Component({
  selector: 'sk-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.scss'],
})
export class SkAlertComponent {
  @Input() public type: StyleType = STYLE.Error;
  @Input() public hasNoShadow: boolean = false;
}

// TODO : Implement all styles
// StyleEnum.Success |
//   StyleEnum.Warning |
//   StyleEnum.Info |
//   StyleEnum.Error |
//   StyleEnum.Neutral |
//   StyleEnum.Primary |
//   StyleEnum.Secondary |
//   StyleEnum.Special |
//   StyleEnum.Light |
//   StyleEnum.Dark;
