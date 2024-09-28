import { CdkStepper } from '@angular/cdk/stepper';
import { Component, inject, Input, signal } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'stepper-form-1',
  templateUrl: './stepper-form-1.component.html',
  styleUrl: './stepper-form-1.component.css'
})
export class StepperForm1Component extends CdkStepper{
  @Input() linearModeSelected = true;

  onClick (index: number) {
    this.selectedIndex = index;

  }
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
  updateErrorMessage() {
  }

  hideMultipleSelectionIndicator = signal(false);


}
