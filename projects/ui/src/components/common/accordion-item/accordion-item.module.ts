import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
// import { IconModule } from '../../core';
import { SkAccordionItemComponent } from './accordion-item.component';

@NgModule({
  declarations: [SkAccordionItemComponent],
  exports: [SkAccordionItemComponent],
  imports: [NgIf], // TODO : Add IconModule
})
export class SkAccordionItemModule {}
