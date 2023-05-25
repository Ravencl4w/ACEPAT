import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partner } from '../Interfaces/Partner';

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
    return this.http.get<Partner[]>(this.apiurl);
  }
}
