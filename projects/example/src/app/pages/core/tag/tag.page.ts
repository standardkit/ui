import { Component } from '@angular/core';

@Component({ templateUrl: 'tag.page.html' })
export class TagPage {
  public onSelectTag(): void {
    console.log('tag selected');
  }
}
