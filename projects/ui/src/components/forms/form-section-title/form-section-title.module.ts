import { NgModule } from '@angular/core';
import { SkFormSectionTitleComponent } from './form-section-title.component';

// TODO : Maybe make it form section and have ng content? or does it fuck up other stuff

@NgModule({
  declarations: [SkFormSectionTitleComponent],
  exports: [SkFormSectionTitleComponent],
})
export class SkFormSectionTitleModule {}
