import { Component } from '@angular/core';
import { InventarioService } from '../../../../services/inventario.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  constructor (
    private _inventarioService: InventarioService,

    ) {}

    ngOnInit(): void {

    }
  public page = 1;
  public noOfRows = 6

  get datosInventarioGeneral(): any[]{

   return this._inventarioService.datosInventarioGeneral

    }

}
