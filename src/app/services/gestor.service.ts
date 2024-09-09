import { inject, Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from "./GLOBAL";

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  login_gestor(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+'login_gestor',data, {headers: headers});
  }

  registro_gestor(data:any, token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token});
    return this._http.post<any>(this.url+'registro_gestor',data, {headers: headers});
  }

  actualizar_gestor(id:any, data: any, token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token});
    return this._http.put<any>(this.url+'actualizar_gestor/'+id ,data ,   {headers: headers});
  }

  obtener_datos_gestor(id:any,  token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token});
    return this._http.get<any>(this.url+'obtener_datos_gestor/'+id, {headers: headers});
  }

  listar_gestores(token:any): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token});
    return this._http.get<any>(this.url+'listar_gestores', {headers: headers});
  }
  public provinciasArgentina:any[] = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
];
}
