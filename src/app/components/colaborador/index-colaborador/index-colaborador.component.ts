import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../../services/colaborador.service';
declare var $: any;


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

  public load_estado: boolean = false;


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

  set_state (id: any, state: any) {
    this.load_estado = true;

    this._colaboradorService.cambiar_estado_colaborador_admin(id, {estado: state}, this.token).subscribe(
      res => {
        this.load_estado = false;
        $('#delete-'+id).modal('hide');
        this.init_data()
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
