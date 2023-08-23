import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../../core';
import { SkAccordionItemComponent } from './accordion-item.component';

@NgModule({
  declarations: [SkAccordionItemComponent],
  exports: [SkAccordionItemComponent],
  imports: [NgIf, SkIconModule],
})
export class SkAccordionItemModule {}
