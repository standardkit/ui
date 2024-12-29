import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-bar',
  templateUrl: 'bar.component.html',
  styleUrl: 'bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class UiBar {
  // TODO : Create horizontal align type
  @Input() public align: 'left' | 'center' | 'right' | 'space-between' = 'left';
  @Input() public growChildren: boolean = false;
  @Input() public noGap: boolean = false;
  @Input() public isVertical: boolean = false;
}
