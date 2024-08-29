import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  listar_empresas (): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get<any>(this.url+'listar_empresas', {headers: headers});

  }
}
