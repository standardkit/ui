import { Component, Input } from '@angular/core';
import { IconSetType } from '@standardkit/core';

@Component({
  selector: 'sk-icon',
  templateUrl: 'icon.component.html',
  styleUrls: ['icon.component.scss'],
})
export class SkIconComponent {
  @Input() public icon?: string = 'icons';
  @Input() public iconSet: IconSetType = 'solid';
  @Input() public isSpinning: boolean = false;
  @Input() public isReverse: boolean = false;
  @Input() public flipX: boolean = false;
  @Input() public flipY: boolean = false;
}
