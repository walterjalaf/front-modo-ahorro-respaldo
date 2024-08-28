import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {

  public nombreUsuario:any = {};
  constructor () {
    let str_user:any = localStorage.getItem('user')
    this.nombreUsuario = JSON.parse(str_user)
  }
  logout(){
    localStorage.clear(); // borro todos los datos del local storage
    window.location.reload(); // recargo la página
  }

}
