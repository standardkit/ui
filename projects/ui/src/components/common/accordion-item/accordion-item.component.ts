import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UiIcon } from '../../core';

@Component({
  selector: 'ui-accordion-item',
  templateUrl: 'accordion-item.component.html',
  styleUrl: 'accordion-item.component.scss',
  imports: [NgIf, UiIcon],
})
export class UiAccordionItem {
  @Input({ required: true }) public name!: string;
  @Input() public hasNoPadding: boolean = false;

  public isOpen: boolean = false;
}
