import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperForm1Component } from './stepper-form-1.component';

describe('StepperForm1Component', () => {
  let component: StepperForm1Component;
  let fixture: ComponentFixture<StepperForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepperForm1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
