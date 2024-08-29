
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmpresaService } from '../../../services/empresa.service.service';
declare var $:any;

@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrl: './create-empresa.component.css'
})
export class CreateEmpresaComponent {
  public empresa : any = {
    estado: ""
  };
  public btn_registrar = false;
  public token : any = localStorage.getItem('token');

  constructor(
    private _empresaService: EmpresaService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  registrar(registroForm:any){


  }


}
