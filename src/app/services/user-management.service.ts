import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http:HttpClient) { }

  apiurl='http://26.186.124.160:4100/credentials';

  createUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiurl);
  }
}
