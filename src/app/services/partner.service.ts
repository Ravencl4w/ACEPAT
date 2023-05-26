import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partner } from '../interfaces/Partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http:HttpClient) { }

  apiurl='http://localhost:4100/socios';

  createPartners(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }
  getPartners(): Observable<Partner[]>{
    const url = `${this.apiurl}?estado=A`;
    return this.http.get<Partner[]>(url);
  }
  patchPartner(inputdata: Partner){
    const url = `${this.apiurl}/${inputdata.id}`;
    return this.http.patch(url, inputdata);
  }
  setPartnerToInactive(inputdata: Partner){
    const url = `${this.apiurl}/${inputdata.id}`;
    inputdata.estado = "I";
    return this.http.patch(url, inputdata);
  }
}
