import { TestBed } from '@angular/core/testing';

import { NgStandardkitService } from './ng-standardkit.service';

describe('NgStandardkitService', () => {
  let service: NgStandardkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgStandardkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
