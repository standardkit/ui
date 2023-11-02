import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoUiComponent } from './demo-ui.component';

describe('DemoUiComponent', () => {
  let component: DemoUiComponent;
  let fixture: ComponentFixture<DemoUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoUiComponent],
    });
    fixture = TestBed.createComponent(DemoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
