import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExampleComponentTwoComponent } from './service-example-component-two.component';

describe('ServiceExampleComponentTwoComponent', () => {
  let component: ServiceExampleComponentTwoComponent;
  let fixture: ComponentFixture<ServiceExampleComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceExampleComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceExampleComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
