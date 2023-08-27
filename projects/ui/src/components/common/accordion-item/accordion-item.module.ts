import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../../core';
import { SkAccordionItemComponent } from './accordion-item.component';

@NgModule({
  imports: [NgIf, SkIconModule],
  declarations: [SkAccordionItemComponent],
  exports: [SkAccordionItemComponent],
})
export class SkAccordionItemModule {}
