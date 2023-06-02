import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GatheringCenter } from '../Interfaces/GatheringCenter';
import { Observable } from 'rxjs';
import { Sunat } from '../Interfaces/Sunat';
import { Transportista } from '../Interfaces/Transportista';

@Injectable({
  providedIn: 'root'
})
export class GatheringService {
  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:4100/centro-acopio';
  urlSunat = 'https://api.apis.net.pe/v1/tipo-cambio-sunat'
  apiTransporte = 'http://localhost:4100/transporte';
  getCenters(): Observable<GatheringCenter[]>{
    const url = `${this.apiurl}`;
    return this.http.get<GatheringCenter[]>(url);
  }
  getCentersById(inputdata: string): Observable<GatheringCenter>{
    const url = `${this.apiurl}/${inputdata}`;
    return this.http.get<GatheringCenter>(url);
  }
  getTipoCambio(): Observable<Sunat>{
    return this.http.get<Sunat>(this.urlSunat);
  }
  getTransportistas(): Observable<Transportista[]>{
    const url = `${this.apiTransporte}`;
    return this.http.get<Transportista[]>(url);
  }
}
