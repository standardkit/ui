import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sk-row',
  templateUrl: 'row.component.html',
  styleUrls: ['row.component.scss'],
  standalone: false,
})
export class SkRowComponent {
  @HostBinding('class') public class: string = 'row';
}
