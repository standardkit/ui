import { NgModule } from '@angular/core';
import { SkAccordionItemModule } from '../accordion-item';
import { SkAccordionComponent } from './accordion.component';

@NgModule({
  imports: [SkAccordionItemModule],
  declarations: [SkAccordionComponent],
  exports: [SkAccordionComponent, SkAccordionItemModule],
})
export class SkAccordionModule {}
