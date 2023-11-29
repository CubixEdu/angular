import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneComponent } from './timezone.component';

describe('TimezoneComponent', () => {
  let component: TimezoneComponent;
  let fixture: ComponentFixture<TimezoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimezoneComponent]
    });
    fixture = TestBed.createComponent(TimezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
