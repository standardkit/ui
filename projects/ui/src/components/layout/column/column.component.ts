import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ui-column',
  templateUrl: 'column.component.html',
  styleUrl: 'column.component.scss',
})
export class UiColumn {
  @HostBinding('class') public class: string = 'column';

  @Input() public width: 'narrow' | 'default' | 'wide' = 'default';

  @HostBinding('class.column--wide')
  public get wideClass(): boolean {
    return this.width === 'wide';
  }

  @HostBinding('class.column--narrow')
  public get narrowClass(): boolean {
    return this.width === 'narrow';
  }
}
