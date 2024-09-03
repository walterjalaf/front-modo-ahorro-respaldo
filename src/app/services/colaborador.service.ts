import { inject, Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from "./GLOBAL";

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  login_admin(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+'login_admin',data, {headers: headers});
  }

  registro_colaborador_admin(data:any, token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token});
    return this._http.post<any>(this.url+'registro_colaborador_admin',data, {headers: headers});
  }
  cambiar_estado_colaborador_admin(id:any, data: any, token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token});
    return this._http.put<any>(this.url+'cambiar_estado_colaborador_admin/'+id,data , {headers: headers});
  }

  actualizar_colaborador_admin(id:any, data: any, token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token});
    return this._http.put<any>(this.url+'actualizar_colaborador_admin/'+id ,data ,   {headers: headers});
  }

  obtener_datos_colaborador_admin(id:any,  token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token});
    return this._http.get<any>(this.url+'obtener_datos_colaborador_admin/'+id, {headers: headers});
  }

  listar_colaboradores(token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token});
    return this._http.get<any>(this.url+'listar_colaboradores', {headers: headers});
  }


}
