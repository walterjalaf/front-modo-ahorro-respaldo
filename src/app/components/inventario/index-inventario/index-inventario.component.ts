import { Component } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';

@Component({
  selector: 'app-index-inventario',
  templateUrl: './index-inventario.component.html',
  styleUrl: './index-inventario.component.css'
})
export class IndexInventarioComponent {

  public inventarios: Array<any> = [];
  public filtro = "";

  public page = 1;
  public noOfRows: number = 6;

  constructor (
    private _inventarioService: InventarioService
    ) {}

    ngOnInit(): void {
      this.init_data()
    }

    init_data (){
      this._inventarioService.listar_inventarios().subscribe(
        res => {
          this.inventarios = res.data;

        }
      )
    }
    filtrar_inventario() {
      
    }


}
