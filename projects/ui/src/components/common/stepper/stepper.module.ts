import { NgModule } from '@angular/core';
import { SkStepperItemModule } from '../stepper-item';
import { SkStepperComponent } from './stepper.component';

@NgModule({
  imports: [SkStepperItemModule],
  declarations: [SkStepperComponent],
  exports: [SkStepperComponent, SkStepperItemModule],
})
export class SkStepperModule {}
