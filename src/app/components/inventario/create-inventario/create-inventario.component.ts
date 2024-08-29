import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioService } from '../../../services/inventario.service';

@Component({
  selector: 'app-create-inventario',
  templateUrl: './create-inventario.component.html',
  styleUrl: './create-inventario.component.css'
})
export class CreateInventarioComponent {

  public colaborador : any = {
    estado: true
  };
  public btn_registrar = false;
  public token : any = localStorage.getItem('token');

  constructor(
    private _inventarioService: InventarioService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  
}
