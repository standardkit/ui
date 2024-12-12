import { AfterContentChecked, AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { SkAccordionItemComponent } from '../accordion-item';

@Component({
  selector: 'sk-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
  standalone: false,
})
export class SkAccordionComponent implements AfterContentInit, AfterContentChecked {
  @ContentChildren(SkAccordionItemComponent) public items!: QueryList<SkAccordionItemComponent>;

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
    this.items.forEach((item: SkAccordionItemComponent): void => {
      item.hasNoPadding = true;
    });
  }
}
