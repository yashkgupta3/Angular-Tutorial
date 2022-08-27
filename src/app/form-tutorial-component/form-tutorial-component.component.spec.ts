import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTutorialComponentComponent } from './form-tutorial-component.component';

describe('FormTutorialComponentComponent', () => {
  let component: FormTutorialComponentComponent;
  let fixture: ComponentFixture<FormTutorialComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTutorialComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTutorialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
