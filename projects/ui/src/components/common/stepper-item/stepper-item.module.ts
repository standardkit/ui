import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkStepperItemComponent } from './stepper-item.component';

@NgModule({
  declarations: [SkStepperItemComponent],
  exports: [SkStepperItemComponent],
  imports: [RouterLink],
})
export class SkStepperItemModule {}
