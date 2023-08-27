import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-label',
  templateUrl: 'label.component.html',
  styleUrls: ['label.component.scss'],
})
export class SkLabelComponent {
  @Input() public for: string = '';
  @Input() public isOptional: boolean = false;
}
