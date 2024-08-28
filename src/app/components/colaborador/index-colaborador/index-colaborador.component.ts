import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../../services/colaborador.service';

@Component({
  selector: 'app-index-colaborador',
  templateUrl: './index-colaborador.component.html',
  styleUrl: './index-colaborador.component.css'
})
export class IndexColaboradorComponent implements OnInit{

  public token: any = localStorage.getItem('token')
  public colaboradores: Array<any> = [];
  public colaboradores_const: Array<any> = [];
  public filtro = "";

  public page = 1;
  public noOfRows: number = 6;


  constructor ( private _colaboradorService: ColaboradorService) {}

  ngOnInit(): void {
    this.init_data()
  }

  init_data (){
    this._colaboradorService.listar_colaboradores(this.token).subscribe(
      res => {
        this.colaboradores = res.data;

      }
    )
  }

  filtrar_colaborador(){

    if (this.filtro) {

      const term = new RegExp(this.filtro,'i');
      console.log(this.filtro);

      this.colaboradores = this.colaboradores.filter(item=>term.test(item.colaborador_nombre)||term.test(item.email)||term.test(item.estado));

    } else {
      this.init_data ()
      this.colaboradores
    }

  }
}
