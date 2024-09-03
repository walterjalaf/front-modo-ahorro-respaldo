import { Component } from '@angular/core';
import { InventarioService } from '../../../../services/inventario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor (
    private _inventarioService: InventarioService,

    ) {}

    ngOnInit(): void {

    }
  public datos : any = {
    sumatoria_relevamiento: 1000,
  };

  registrar_datos (registroForm: any){

    this._inventarioService.addRow(registroForm)

  }

}
