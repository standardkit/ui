import { AfterContentChecked, AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { UiAccordionItem } from '../accordion-item';

@Component({
  selector: 'ui-accordion',
  templateUrl: 'accordion.component.html',
  styleUrl: 'accordion.component.scss',
  imports: [UiAccordionItem],
})
export class UiAccordion implements AfterContentInit, AfterContentChecked {
  @ContentChildren(UiAccordionItem) public items!: QueryList<UiAccordionItem>;

  @Input() public hasNoPadding: boolean = false;
  @Input() public openFirstTab: boolean = false;

  public ngAfterContentInit(): void {
    if (this.openFirstTab) {
      setTimeout((): boolean => (this.items.first.isOpen = true), 1);
    }
  }

  public ngAfterContentChecked(): void {
    if (!this.hasNoPadding) {
      return;
    }
    this.items.forEach((item: UiAccordionItem): void => {
      item.hasNoPadding = true;
    });
  }
}
