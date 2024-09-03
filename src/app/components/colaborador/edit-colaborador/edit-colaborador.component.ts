import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../../services/colaborador.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-edit-colaborador',
  templateUrl: './edit-colaborador.component.html',
  styleUrl: './edit-colaborador.component.css'
})
export class EditColaboradorComponent implements OnInit{

  public colaborador : any = {
    estado: true
  };
  public id = "";
  public btn_actualizar = false;
  public token : any = localStorage.getItem('token');
  public load_data: boolean = false;
  public data = false;

  constructor(
    private _colaboradorService:ColaboradorService ,
    private _router:Router,
    private _route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this._route.params.subscribe(
      params => {

        this.id = params['id'];
        this.load_data = true;
        this._colaboradorService.obtener_datos_colaborador_admin(this.id, this.token).subscribe(
          res => {
            if (res.data != undefined) {
              this.colaborador = res.data
              this.data = true
              this.load_data = false
            } else {
              this.data = false
              this.load_data = false

            }
          }

        )


      }
    )

  }
  actualizar (actualizarForm: any){
    if(actualizarForm.valid){

      this.btn_actualizar = true;

      this._colaboradorService.actualizar_colaborador_admin(this.id, this.colaborador, this.token).subscribe(
        response=>{
          console.log(response);

          if(response.data == undefined){
            $.notify(response.message, {
              type: 'danger',
              spacing: 10,
              timer: 2000,
              placement: {
                  from: 'top',
                  align: 'right'
              },
              delay: 1000,
              animate: {
                  enter: 'animated ' + 'bounce',
                  exit: 'animated ' + 'bounce'
              }
            });
            this.btn_actualizar = false;
          }else{
            this.btn_actualizar = false;
            $.notify('Se actualizó el nuevo colaborador.', {
              type: 'success',
              spacing: 10,
              timer: 2000,
              placement: {
                  from: 'top',
                  align: 'right'
              },
              delay: 1000,
              animate: {
                  enter: 'animated ' + 'bounce',
                  exit: 'animated ' + 'bounce'
              }
            });
            this._router.navigate(['/colaborador']);
          }
        }
      );
    }else{
      $.notify('Complete correctamente el formulario', {
        type: 'danger',
        spacing: 10,
        timer: 2000,
        placement: {
            from: 'top',
            align: 'right'
        },
        delay: 1000,
        animate: {
            enter: 'animated ' + 'bounce',
            exit: 'animated ' + 'bounce'
        }
      });
    }

  }

}
