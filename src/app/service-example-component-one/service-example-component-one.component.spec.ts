import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExampleComponentOneComponent } from './service-example-component-one.component';

describe('ServiceExampleComponentOneComponent', () => {
  let component: ServiceExampleComponentOneComponent;
  let fixture: ComponentFixture<ServiceExampleComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceExampleComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceExampleComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
