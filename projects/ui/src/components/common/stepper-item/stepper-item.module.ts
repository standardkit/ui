import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkStepperItemComponent } from './stepper-item.component';

@NgModule({
  imports: [RouterLink],
  declarations: [SkStepperItemComponent],
  exports: [SkStepperItemComponent],
})
export class SkStepperItemModule {}
