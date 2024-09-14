import { Component, inject, Input, signal } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkStepper } from '@angular/cdk/stepper';
import { FloatLabelType } from '@angular/material/form-field';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
  providers: [{provide: CdkStepper, useExisting:StepperComponent }]
})
export class StepperComponent extends CdkStepper{
  @Input() linearModeSelected = true;

  onClick (index: number) {
    this.selectedIndex = index;

  }
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  tercerFormGroup = this._formBuilder.group({
    tercerCtrl: ['', Validators.required],
  });
  cuartoFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  quintoFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  sextoFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
  updateErrorMessage() {
  }

  hideMultipleSelectionIndicator = signal(false);
}
