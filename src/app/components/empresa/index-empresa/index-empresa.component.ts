import { Component } from '@angular/core';
import { EmpresaService} from '../../../services/empresa.service.service';

@Component({
  selector: 'app-index-empresa',
  templateUrl: './index-empresa.component.html',
  styleUrl: './index-empresa.component.css'
})
export class IndexEmpresaComponent {

  public filtro = "";
  public empresas: Array<any> = [];

  public page = 1;
  public noOfRows: number = 6;

  constructor ( private _empresasService: EmpresaService) {

  }
  ngOnInit(): void {
    this.init_data()
  }

  init_data () {
    this._empresasService.listar_empresas().subscribe(
      res => {
        this.empresas = res.data
      }
    )
  }

  filtrar_empresa(){}
}
