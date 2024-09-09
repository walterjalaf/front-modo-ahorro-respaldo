import { Component } from '@angular/core';
import { GestorService } from '../../../services/gestor.service';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-perfil-gestor',
  templateUrl: './perfil-gestor.component.html',
  styleUrl: './perfil-gestor.component.css'
})
export class PerfilGestorComponent {
  public gestor : any = {
    provincia: "San Juan"
  };
  public btn_actualizar = false;
  public token : any = localStorage.getItem('token');
  public id : any = localStorage.getItem('gestor_id');

  constructor(
    private _gestorService: GestorService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.init_data()
  }

  get provinciasArgentinas () {
    return this._gestorService.provinciasArgentina
  }

  init_data () {
    this._gestorService.obtener_datos_gestor(this.id, this.token).subscribe(
      res => {
        this.gestor = res.data;

      }
    )
  }

  actualizarDatosGestor(actualizarForm:any){


      this.btn_actualizar = true;

      this._gestorService.actualizar_gestor(this.id, this.gestor, this.token).subscribe(
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
            $.notify('Se actualizó el perfil.', {
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
            this._router.navigate(['/dashboard']);
          }
        }
      );



  }





}
