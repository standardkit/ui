import { Component, Input } from '@angular/core';
import { STYLE, StyleType, IconSetType } from '@standardkit/core';

@Component({
  selector: 'sk-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
})
export class SkButtonComponent {
  @Input() public type: StyleType = STYLE.Primary;
  @Input() public disabled: boolean = false;
  @Input() public fullWidth: boolean = false;
  @Input() public compact: boolean = false; // TODO : Introduce sizes
  @Input() public isSharp: boolean = false;
  @Input() public icon?: string;
  @Input() public iconSet?: IconSetType;
  @Input() public alignIcon: 'left' | 'right' = 'right';
  @Input() public flipIcon: boolean = false;
  @Input() public isSubmit: boolean = false;
  @Input() public noShadow: boolean = false;
}
