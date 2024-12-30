import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-row',
  templateUrl: 'row.component.html',
  styleUrl: 'row.component.scss',
})
export class UiRow {
  @HostBinding('class') public class: string = 'row';
}
