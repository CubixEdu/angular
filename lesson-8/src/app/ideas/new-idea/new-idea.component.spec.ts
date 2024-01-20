import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeaComponent } from './new-idea.component';

describe('NewIdeaComponent', () => {
  let component: NewIdeaComponent;
  let fixture: ComponentFixture<NewIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewIdeaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
