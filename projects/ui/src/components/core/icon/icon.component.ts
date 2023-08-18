import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-icon',
  templateUrl: 'icon.component.html',
  styleUrls: ['icon.component.scss'],
})
export class SkIconComponent {
  @Input() public icon: string = 'icons';
  @Input() public isSpinning: boolean = false;
  @Input() public isReverse: boolean = false;
}
