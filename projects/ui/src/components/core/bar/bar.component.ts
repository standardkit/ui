import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sk-bar',
  templateUrl: 'bar.component.html',
  styleUrls: ['bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SkBarComponent {
  // TODO : Create enumType
  @Input() public align: 'left' | 'center' | 'right' | 'space-between' = 'left';
  @Input() public growChildren: boolean = false;
  @Input() public noGap: boolean = false;
  @Input() public isVertical: boolean = false;
}
