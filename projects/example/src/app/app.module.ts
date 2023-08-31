import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutingModule, QuillModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
