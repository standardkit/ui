# StandardKit UI

## What is it?

Angular Component Library for rapidly building dashboards & portals.

- Admin Portal
- Platform Configuration
- System Monitoring / Jobs
- Reporting Dashboard
- SaaS Back-office

Basically any sidebar-based dashboard with cards, tables, modals & forms.

## Paradigms & Principles

- Content Projection (named slots)
- Defaults & Standards (works with minimal setup in a standard way)
- Configure & Compose (specify what you need, build what you want)
- Customize & Override (color outside the lines and enjoy freedom)

[//]: # "TODO : Fix www. subdomain working"

For more information on underlying paradigms, visit [standardkit.dev](https://standardkit.dev).

## Component Categories

- Core & Common (button, icon, alert, card etc.)
- Layout (sidebar, top-bar, navigation, card-page, sidebar-page etc.)
- Tables (data-table, table, search, filter, pagination etc.)
- Forms (text-input, select-input, multi-select-input, etc.)

[//]: # "TODO : Implement this website"

For more information about components, check the documentation [docs.standardkit.dev](https://docs.standardkit.dev) or
run the `example` project in this repository.

> The docs are currently not yet live. Please run the `example` project locally instead for now with `ng serve`

## Installation

### NPM

To install StandardKit UI Components through npm, use:

```bash
npm i @standardkit/ui
```

### Setup Styles

Go to `angular.json` and add the scss folder to your include paths like this:

> Don't forget to add it for your tests as well!

```json
{
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

[//]: # "TODO : Add example of font awesome angular.json"

Add the icon path to your angular.json as well.

## Basic Examples

### Layout

```angular181html
<!--sidebar.layout.html-->
<sk-sidebar-page>
  <sk-header brand="Admin Portal">
    <sk-user-menu [items]="menuItems"></sk-user-menu>
  </sk-header>

  <sk-sidebar [navigationItems]="navigationItems"></sk-sidebar>

  <router-outlet></router-outlet>

</sk-sidebar-page>
```

### Page with Data Table

```angular181html
<!--data-table.page.html-->
<sk-top-bar [isFullWidth]="true" name="Data Table">
  <ui-breadcrumbs [breadcrumbs]="breadcrumbs"></ui-breadcrumbs>
  <ui-button (buttonClick)="onAddItem()" icon="plus">Add Item</ui-button>
</sk-top-bar>

<sk-data-table
  (request)="onRequest($event)"
  [columns]="columns"
  [response]="response"
></sk-data-table>
```

### Simple Form

```angular181html
<!--name.form.html-->
<ui-form [formGroup]="form">

  <ui-field name="name">
    <sk-label>Name</sk-label>
    <sk-text-input formControlName="name">
      <ng-container slot="error">Name is required</ng-container>
    </sk-text-input>
  </ui-field>

  <ui-button [isSubmit]="true" (click)="onSubmit()" icon="save">Submit</ui-button>
</ui-form>
```

## Version Compatibility

| Angular                   | StandardKit         |
| ------------------------- | ------------------- |
| Angular `16`              | Standardkit `0.1.0` |
| Angular `17`              | `not supported`     |
| Angular `18`              | StandardKit `0.2.0` |
| Angular `19 - legacy`     | StandardKit `0.3.0` |
| Angular `19 - standalone` | StandardKit `0.4.x` |

## Migration Guide

### 19 - `legacy` (`0.3.0`) to 19 - `standalone` (`0.4.x`)

> Warning: 19 - standalone is currently a work in progress. Migrate at your own risk.

- Change imports from SkButtonModule to UiButton
- change template usages from `<sk-button>` to `<ui-button>`

#### Component updates

- `ui-select-input` error slot now becomes `slot="error"` (new) instead of `slot="footer"` (deprecated)
- `ui-button` now has a `buttonClick` event that handles `keydown`/`tabindex` and takes into account `disabled` status

### 16 to 19 - legacy

Just upgrade angular itself, nothing is changed only version bumps. Create an issue if you need help migrating through
v17.
