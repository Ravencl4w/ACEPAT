import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map, of, switchMap, take, throwError } from 'rxjs';
import { Partner } from '../interfaces/Partner';
import { PartnerDetail } from '../Interfaces/PartnerDetail';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http:HttpClient) { }

  apiurl='http://26.186.124.160:4100/socios';
  apiurlDetail='http://26.186.124.160:4100/socios-detalle';
  createPartners(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }
  getPartners(): Observable<Partner[]> {
    const url = `${this.apiurl}?estado=A&_sort=comitesectorial`;
    return this.http.get<Partner[]>(url);
  }
  
  getPartnersById(inputdata: string): Observable<Partner>{
    const url = `${this.apiurl}/${inputdata}`;
    return this.http.get<Partner>(url);
  }
  getPartnersByDni(inputdata: string): Observable<Partner>{
    const url = `${this.apiurl}/?dni=${inputdata}`;
     this.http.get<Partner>(url);
    return this.http.get<Partner[]>(url).pipe(
      switchMap(results => {
        if (results.length === 1) {
          return of(results[0]);
        } else {
          return throwError('No se encontró un resultado único');
        }
      })
    ) as Observable<Partner>;
  }
  getPartnersByName(inputdata: string): Observable<Partner>{
    const url = `${this.apiurl}?nombre=${inputdata}`;
    this.http.get<Partner>(url);
    return this.http.get<Partner[]>(url).pipe(
      switchMap(results => {
        if (results.length === 1) {
          return of(results[0]);
        } else {
          return throwError('No se encontró un resultado único');
        }
      })
    ) as Observable<Partner>;
  }
  getPartnerDetails(inputdata: string): Observable<PartnerDetail[]>{
    const url = `${this.apiurlDetail}?id_socio=${inputdata}`;
    return this.http.get<PartnerDetail[]>(url);
  }
  patchPartner(inputdata: Partner){
    const url = `${this.apiurl}/${inputdata.id}`;
    return this.http.patch(url, inputdata);
  }
  patchPartnerDetail(inputdata: PartnerDetail){
    const url = `${this.apiurlDetail}/${inputdata.id}`;
    return this.http.patch(url, inputdata);
  }
  setPartnerToInactive(inputdata: Partner){
    const url = `${this.apiurl}/${inputdata.id}`;
    inputdata.estado = "I";
    return this.http.patch(url, inputdata);
  }
  deleteDetail(inputdata: PartnerDetail){
    const url = `${this.apiurlDetail}/${inputdata.id}`;
    return this.http.delete(url);
  }
  getPartnersFilterDni(inputdata: string): Observable<Partner[]> {
    const url =  `${this.apiurl}?dni_like=${inputdata}&estado_ne=I `;
  
    if (inputdata.length === 8) {
      return this.http.get<Partner[]>(url).pipe(
        map(results => results.slice(0, 1))
      );
    } else {
      return this.http.get<Partner[]>(url);
    }
  }
  getPartnersFilterName(inputdata: string): Observable<Partner[]>{
    const url = `${this.apiurl}?nombre_like=${inputdata}*&estado_ne=I`;
    return this.http.get<Partner[]>(url);
  }
  getPartnersFilterNameDni(inputdata: string, inputdata2: string): Observable<Partner[]>{
    const url = `${this.apiurl}?nombre_like=${inputdata}*&dni_like=${inputdata2}*&estado_ne=I`;
    return this.http.get<Partner[]>(url);
  }

}
