import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeaTemplateDrivenComponent } from './new-idea-template-driven.component';

describe('NewIdeaTemplateDrivenComponent', () => {
  let component: NewIdeaTemplateDrivenComponent;
  let fixture: ComponentFixture<NewIdeaTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewIdeaTemplateDrivenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewIdeaTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
