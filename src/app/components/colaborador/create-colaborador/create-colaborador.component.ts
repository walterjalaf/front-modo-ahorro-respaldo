// import { Component } from '@angular/core';
// import { ColaboradorService } from '../../../services/colaborador.service';
// import { Router } from '@angular/router';
// declare var $:any


// @Component({
//   selector: 'app-create-colaborador',
//   templateUrl: './create-colaborador.component.html',
//   styleUrl: './create-colaborador.component.css'
// })
// export class CreateColaboradorComponent {

//   public colaborador: any = {
//     estado: ""
//   };
//   constructor (
//     private _colaboradorService: ColaboradorService,
//     private _router: Router
//   ){}
//   registrar(registroForm:any){


//     if (registroForm.valid) {

//       console.log("Formulario validado");


//       this._colaboradorService.registro_colaborador_admin(this.colaborador).subscribe(
//         res =>{
//           console.log("formulario invalido");

//           console.log(res);


//           if (res.data == undefined) {

//             $.notify(res.message, {
//               type: 'danger',
//               spacing: 10,
//               timer: 2000,
//               placement: {
//                   from: 'top',
//                   align: 'right'
//               },
//               delay: 1000,
//               animate: {
//                   enter: 'animated ' + 'bounce',
//                   exit: 'animated ' + 'bounce'
//               }});

//           } else {

//             console.log("Registrando colaborador");



//             $.notify("Se registró correctamente el colaborador.", {
//               type: 'success',
//               spacing: 10,
//               timer: 2000,
//               placement: {
//                   from: 'top',
//                   align: 'right'
//               },
//               delay: 1000,
//               animate: {
//                   enter: 'animated ' + 'bounce',
//                   exit: 'animated ' + 'bounce'
//               }});

//             this._router.navigate(['/colaborador'])


//           }

//         }

//       )
//     } else {
//       $.notify('Complete correctamente el formulario.', {
//         type: 'danger',
//         spacing: 10,
//         timer: 2000,
//         placement: {
//             from: 'top',
//             align: 'right'
//         },
//         delay: 1000,
//         animate: {
//             enter: 'animated ' + 'bounce',
//             exit: 'animated ' + 'bounce'
//         }});

//     }

//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradorService } from '../../../services/colaborador.service';
declare var $:any;

@Component({
  selector: 'app-create-colaborador',
  templateUrl: './create-colaborador.component.html',
  styleUrls: ['./create-colaborador.component.css']
})
export class CreateColaboradorComponent implements OnInit {

  public colaborador : any = {
    estado: true
  };
  public btn_registrar = false;
  public token : any = localStorage.getItem('token');

  constructor(
    private _colaboradorService:ColaboradorService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  registrar(registroForm:any){


    if(registroForm.valid){
      this.btn_registrar = true;
      this._colaboradorService.registro_colaborador_admin(this.colaborador).subscribe(
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
            this.btn_registrar = false;
          }else{
            this.btn_registrar = false;
            $.notify('Se registro el nuevo colaborador.', {
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
