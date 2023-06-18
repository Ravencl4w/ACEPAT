import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../Interfaces/Ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }
  apiurl='http://26.186.124.160:4100/ticket';
  createTicket(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }
  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.apiurl);
  }
}
