import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExampleModule } from './app/example.module';

platformBrowserDynamic()
  .bootstrapModule(ExampleModule)
  .catch((error: unknown) => console.error(error));
