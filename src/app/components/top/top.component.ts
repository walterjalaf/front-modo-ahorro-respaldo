import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {

  public nombreUsuario:any = {};
  constructor (

    private _router: Router,
  ) {
    let str_user:any = localStorage.getItem('user')
    this.nombreUsuario = JSON.parse(str_user)


  }
  logout(){
    localStorage.clear(); // borro todos los datos del local storage
    // window.location.reload(); // recargo la página
    this._router.navigate(['']);
  }

  go_perfil (){
    this._router.navigate(['Perfil' ])

  }

}
