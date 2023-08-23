import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'sk-column',
  templateUrl: 'column.component.html',
  styleUrls: ['column.component.scss'],
})
export class SkColumnComponent {
  @HostBinding('class') public class: string = 'column';

  @HostBinding('class.column--wide')
  public get wideClass(): boolean {
    return this.width === 'wide';
  }

  @HostBinding('class.column--narrow')
  public get narrowClass(): boolean {
    return this.width === 'narrow';
  }

  @Input() public width: 'narrow' | 'default' | 'wide' = 'default';
}
