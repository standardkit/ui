import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent, appConfig } from './app';

bootstrapApplication(AppComponent, appConfig).catch((error: any) => console.error(error));
