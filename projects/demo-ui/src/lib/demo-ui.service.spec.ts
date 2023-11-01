import { TestBed } from '@angular/core/testing';
import { DemoUiService } from './demo-ui.service';

describe('DemoUiService', () => {
  let service: DemoUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
