import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http:HttpClient) { }

  apiurl='http://localhost:4100/credentials';

  createUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiurl);
  }
  modifyUser(userId: string, inputdata: any): Observable<any> {
    const url = `${this.apiurl}/${userId}`; // URL del recurso específico a modificar
    return this.http.patch(url, inputdata); // Utiliza PATCH en lugar de PUT para actualizar parcialmente el recurso
  }
}
