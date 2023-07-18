import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Acopio } from '../interfaces/Acopio';
import { AcopioList } from '../Interfaces/AcopioList';

@Injectable({
  providedIn: 'root'
})
export class AcopioService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:4100/acopio-racimos';
  apicreate = 'http://localhost:4100/acopio-list';

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

createNewAcopios(inputdata:any){
  return this.http.post(this.apicreate,inputdata);
}

getAcopiosList(): Observable<AcopioList[]> {
  const url = `${this.apicreate}`;
  return this.http.get<AcopioList[]>(url);
}
}
