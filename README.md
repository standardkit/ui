# StandardKit UI

## Installation

### NPM

To install StandardKit UI Components through npm, use:

```bash
npm install --save @standardkit/ui
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

Add it to your angular.json as well.

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

> To Be Implemented
