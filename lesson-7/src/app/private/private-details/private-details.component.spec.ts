import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetailsComponent } from './private-details.component';

describe('PrivateDetailsComponent', () => {
  let component: PrivateDetailsComponent;
  let fixture: ComponentFixture<PrivateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
