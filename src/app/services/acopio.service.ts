import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Acopio } from '../interfaces/Acopio';

@Injectable({
  providedIn: 'root'
})
export class AcopioService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://26.186.124.160:4100/acopio-racimos';

  getAcopios(startDate: Date, endDate: Date): Observable<Acopio[]> {
  return this.http.get<Acopio[]>(this.apiurl).pipe(
    map(acopios => {
      // Filtrar los acopios que estén dentro del rango de fechas
      return acopios.filter(acopio => {
        const fechaAcopio = new Date(acopio.fecha);
        return fechaAcopio >= startDate && fechaAcopio <= endDate;
      });
    })
  );
}

createAcopios(inputdata:any){
  return this.http.post(this.apiurl,inputdata);
}
}
