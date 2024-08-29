import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  listar_inventarios (): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get<any>(this.url+'listar_inventarios', {headers: headers});

  }

  public datosInventarioGeneral: any[] = [
    {
      fuente_de_energia: "Energía eléctrica",
      equipos_Principales: "AA BGH BSH35WCP DATA CENTER ",
      dist_por_uso: "Climatización",
      consumo_nominal: "1.93"

    },
    {
      fuente_de_energia: "Energía eléctrica",
      equipos_Principales: "AA BGH BSH35WCP",
      dist_por_uso: "Climatización",
      consumo_nominal: "1.85"

    }

    ,{
      fuente_de_energia: "Energía eléctrica",
      equipos_Principales: "AA LG ",
      dist_por_uso: "Climatización",
      consumo_nominal: "1.94"

    }
    ,{
      fuente_de_energia: "Energía eléctrica",
      equipos_Principales: "AA LG ",
      dist_por_uso: "Climatización",
      consumo_nominal: "1.94"

    }
    ,{
      fuente_de_energia: "Energía eléctrica",
      equipos_Principales: "AA LG ",
      dist_por_uso: "Climatización",
      consumo_nominal: "1.94"

    },
    {
      fuente_de_energia: "Energía eléctrica",
      equipos_Principales: "AA LG ",
      dist_por_uso: "Climatización",
      consumo_nominal: "1.94"

    },
    {
      fuente_de_energia: "Energía eléctrica",
      equipos_Principales: "AA LG ",
      dist_por_uso: "Climatización",
      consumo_nominal: "1.94"

    }

  ]

  addRow(registro: any){
    const newRow = {...registro}
    this.datosInventarioGeneral.push(registro)
  }

  deleteRow (equipo: string){
    this.datosInventarioGeneral = this.datosInventarioGeneral.filter(registro => registro.equipos_Principales != equipo)
  }
}
