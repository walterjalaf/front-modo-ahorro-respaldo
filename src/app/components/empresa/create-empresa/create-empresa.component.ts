
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmpresaService } from '../../../services/empresa.service.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkStepper } from '@angular/cdk/stepper';

declare var $:any;

@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrl: './create-empresa.component.css'
})
export class CreateEmpresaComponent  extends CdkStepper{


  @Input() linearModeSelected = true;

  public empresa : any = {
    estado: ""
  };
  public btn_registrar = false;
  public token : any = localStorage.getItem('token');
  animations?: any[]




  // private _empresaService: EmpresaService,
  // private _router:Router,
  private _formBuilder = inject(FormBuilder)
  ngOnInit(): void {
  }

  registrar(registroForm:any){


  }
  public myForm: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [ Validators.required, Validators.min(0)]],
    inStorage: [0, [ Validators.required, Validators.min(0)]]
  })
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  onSave(){}
  isLinear(){}

}
