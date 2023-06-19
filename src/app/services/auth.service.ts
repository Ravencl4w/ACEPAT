import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  // Función para cambiar el valor de isLoggedIn
  
  constructor(private http:HttpClient) { 

  }
  apiurl='http://26.186.124.160:4100/credentials';

  private isLoggedInSubject = new BehaviorSubject<boolean>(true);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  getIsLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  setIsLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
    
  }

  


}