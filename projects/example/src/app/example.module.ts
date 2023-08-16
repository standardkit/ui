import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleComponent } from './example.component';
import { RoutingModule } from './routing';

@NgModule({
  declarations: [ExampleComponent],
  imports: [BrowserModule, RoutingModule],
  bootstrap: [ExampleComponent],
})
export class ExampleModule {}
