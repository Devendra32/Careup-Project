import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Role } from '../model/role';

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
  private changeUserStatusURL = "http://localhost:8080/api/status";

  constructor(private httpClient: HttpClient) { }

  //Get all users List
  getUsersList(): Observable<User[]>{
      return this.httpClient.get<User[]>(`${this.usersURL}`);
  }

  //Get Active Users List
  getActiveUsersList(): Observable<User[]>{
      return this.httpClient.get<User[]>(`${this.getActiveUsersURL}`);
  }

  //Add new user
  addUser(user: User): Observable<object>{
    return this.httpClient.post(`${this.addUserURL}`,user);
  }

  //User exist user details
  updateUserDetails(id:number, user:User): Observable<object>{
    return this.httpClient.put(`${this.updateUserURL}/${id}`,user);
  }

  //Get all roles list
  getRoleList(): Observable<Role[]>{
    return this.httpClient.get<Role[]>(`${this.rolesURL}`);
  }
  
  //Add new role
  addRole(role: Role): Observable<object>{
    return this.httpClient.post(`${this.addRoleURL}`,role);
  }

  //Get user by id
  getUserById(id:number): Observable<User>{
    return this.httpClient.get<User>(`${this.userByIdURL}/${id}`);
  }

  //Change user status
  changeUserStatus(status:boolean, id:number): Observable<object>{
    return this.httpClient.put(`${this.changeUserStatusURL}/${status}/${id}`,Object);
  }


}
