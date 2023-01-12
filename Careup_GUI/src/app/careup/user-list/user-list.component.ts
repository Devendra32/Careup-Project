import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../user';
import { UserService } from '../../user.service'

@Component({
  selector: 'users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];
  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getActiveUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

  private getActiveUsers(){
    this.userService.getActiveUsersList().subscribe(data => {
      this.users = data;
    });
  }

  getUser(id: any){
    this.router.navigate(['user',id])
  }

  inActiveUser(id: any){

    this.getUserById(id);
    this.user.status=0;
    // this.deteleUser(id, this.user);
    console.log("id: ",id, "User: ", this.user);
    this.getActiveUsers();
  }
  getUserById(id:number){
    this.userService.getUserById(id).subscribe( data => {
      this.user = data
      console.log(data);
    }, error => console.log(error));
  }
  
  deteleUser(userId:number , user:User) {
    this.userService.updateUserDetails(userId,user).subscribe(data => {
      console.log(data, alert("User Deleted successfully..."));
    }, error => console.log(error, alert("Failed to deleted user...")));
  }
}
