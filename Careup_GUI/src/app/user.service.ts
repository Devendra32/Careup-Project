import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private rolesURL = "http://localhost:8080/api/get-role";
  private addRoleURL = "http://localhost:8080/api/add-role";
  private usersURL = "http://localhost:8080/api/users";
  private addUserURL = "http://localhost:8080/api/add-user"; 
  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
      return this.httpClient.get<User[]>(`${this.usersURL}`);
  }

  addUser(user: User): Observable<object>{
    return this.httpClient.post(`${this.addUserURL}`,user);
  }

  getRoleList(): Observable<Role[]>{
    return this.httpClient.get<Role[]>(`${this.rolesURL}`);
  }
  
  addRole(role: Role): Observable<object>{
    return this.httpClient.post(`${this.addRoleURL}`,role);
  }


}
