import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GestorService } from '../../services/gestor.service';
declare var $:any


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public user: any ={
    email: "",
    password: ""
  };
  public token: any = localStorage.getItem('token')

  constructor (
    private _gestorService: GestorService,
    private _router: Router
  ){}

  ngOnInit(): void {
  // if(this.token){
  //   this._router.navigate(['/dashboard'])
  // } else {
  //   this._router.navigate([''])
  // }

  }

  login(loginForm:any){

    if (loginForm.valid) {

      console.log(this.user);

      this._gestorService.login_gestor(this.user).subscribe(
        res =>{


          if (res.data == undefined) {

            $.notify(res.message, {
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
              }});

          } else {
              localStorage.setItem('token', res.token);
              localStorage.setItem('user', JSON.stringify(res.data))
              localStorage.setItem('gestor_id', res.data.gestor_id)
              this._router.navigate(['/dashboard'])

          }

        }
      )
    } else {

      $.notify('Complete correctamente el formulario.', {
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
              }});

    }}


}
