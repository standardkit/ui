# StandardKit UI

## Installation

### NPM

To install StandardKit UI Components through npm, use:

```bash
npm install --save @standardkit/ui @standardkit/core
```

### Styles

Go to `angular.json` and add the scss folder to your include paths like this:

```json
{
  "projects": {
    "example": {
      "architect": {
        "build": {
          "options": {
            "stylePreprocessorOptions": {
              "includePaths": ["node_modules/@standardkit/ui/src/styles"]
            }
          }
        }
      }
    }
  }
}
```

Then, add the base styling and the theme variables.

```scss
@use "@standardkit/ui/base";
@use "@standardkit/ui/theme";

// Include StandardKit Fonts
@include theme.include-default-fonts;
@include theme.use-default-font;
```

### Icons

Install font awesome icons:

```bash
npm install --save @fortawesome/fontawesome-free
```

Add then to your angular.json as well:

## Extra Dependencies

### Rich Text Editor

For the `<sk-rich-text-input>` component, you need to install `ngx-quill` along with `quill` and `@types/quill`. These
are optional dependencies, only needed if you actually use the rich text input component.

```bash
npm install --save ngx-quill quill

npm install --save-dev @types/quill
```

> :warning: Make sure to install version `1.x` of `@types/quill` if you install `1.x` of `quill`. Otherwise you'll get
> type errors. At the point of writing quill `2.x` is still in `rc` but types have already been published.

In addition, you need to import the `QuillModule` in your application.

```typescript
import { QuillModule } from "ngx-quill";

@NgModule({
  imports: [QuillModule.forRoot()],
})
export class AppModule {}
```

`ngx-quill` uses `quill` as a `commonjs` dependency. This needs to be enabled in your build options in `angular.json`.

```json
{
  "projects": {
    "example": {
      "architect": {
        "build": {
          "options": {
            "allowedCommonJsDependencies": ["quill"]
          }
        }
      }
    }
  }
}
```

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

`ng serve` will run the `example` project.

## Publish

To build & publish, there are three commands:

```bash
npm run release:patch

npm run release:minor

npm run release:major
```

## Running unit tests

Unit tests are ran using `Jest`.

> To Be Implemented
