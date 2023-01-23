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
  private updateUserURL = "http://localhost:8080/api/update-user";
  private userByIdURL = "http://localhost:8080/api/user";
  private getActiveUsersURL = "http://localhost:8080/api/active-users";

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
      return this.httpClient.get<User[]>(`${this.usersURL}`);
  }

  getActiveUsersList(): Observable<User[]>{
      return this.httpClient.get<User[]>(`${this.getActiveUsersURL}`);
  }

  addUser(user: User): Observable<object>{
    return this.httpClient.post(`${this.addUserURL}`,user);
  }

  updateUserDetails(id:number, user:User): Observable<object>{
    return this.httpClient.put(`${this.updateUserURL}/${id}`,user);
  }

  getRoleList(): Observable<Role[]>{
    return this.httpClient.get<Role[]>(`${this.rolesURL}`);
  }
  
  addRole(role: Role): Observable<object>{
    return this.httpClient.post(`${this.addRoleURL}`,role);
  }

  getUserById(id:number): Observable<User>{
    return this.httpClient.get<User>(`${this.userByIdURL}/${id}`);
  }


}
