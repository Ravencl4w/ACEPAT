import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../Interfaces/Ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:4100/ticket';
  createTicket(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }
  getTickets(inputdata: any): Observable<Ticket[]>{
    const url =  `${this.apiurl}?acopioid=${inputdata}`
    return this.http.get<Ticket[]>(url);
  }
}
