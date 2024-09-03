import { Component, Input } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';

@Component({
  selector: 'app-inventario-general',
  templateUrl: './inventario-general.component.html',
  styleUrl: './inventario-general.component.css'
})
export class InventarioGeneralComponent {
  public inventarios: Array<any> = [];
  public filtro = "";

  public page = 1;
  public noOfRows: number = 6;

  constructor (
    private _inventarioService: InventarioService,

    ) {}

    ngOnInit(): void {

    }

  get datosInventarioGeneral(): any[]{

   return this._inventarioService.datosInventarioGeneral

    }

    // Listar registros

    registrar_datos (registroForm: any){

      this._inventarioService.datosInventarioGeneral.push(registroForm)

    }





}
