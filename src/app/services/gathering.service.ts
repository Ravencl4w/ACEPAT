import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GatheringCenter } from '../Interfaces/GatheringCenter';
import { Observable, of, switchMap, throwError } from 'rxjs';
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
  getCentersByName(inputdata: string): Observable<GatheringCenter> {
    const url = `${this.apiurl}/?centro=${inputdata}`;
  
    return this.http.get<GatheringCenter[]>(url).pipe(
      switchMap(results => {
        if (results.length === 1) {
          return of(results[0]);
        } else {
          return throwError('No se encontró un resultado único');
        }
      })
    ) as Observable<GatheringCenter>;
  }
  

  
  getTipoCambio(): Observable<Sunat>{
    return this.http.get<Sunat>(this.urlSunat);
  }
  getTransportistas(): Observable<Transportista[]>{
    const url = `${this.apiTransporte}`;
    return this.http.get<Transportista[]>(url);
  }
}
