import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
