import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-accordion-item[name]',
  templateUrl: 'accordion-item.component.html',
  styleUrls: ['accordion-item.component.scss'],
  standalone: false,
})
export class SkAccordionItemComponent {
  @Input() public name!: string;
  @Input() public hasNoPadding: boolean = false;

  public isOpen: boolean = false;
}
