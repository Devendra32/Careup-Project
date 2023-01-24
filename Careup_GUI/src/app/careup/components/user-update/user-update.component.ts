import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../model/role';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: User = new User();
  roles!: Role[];
  userId!: number;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.getRoles();
       
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe( data => {
      this.user = data;  
    }, error => console.log(error));
  }
  onSubmit() {
    // console.log("User : ",this.userUpdateForm.value);
    // console.log(this.userId);
    console.log("userId: ",this.userId, "User: ",this.user);
    this.updateUser(this.userId, this.user);
    
   }
   updateUser(userId:number , user:any) {
    this.userService.updateUserDetails(userId,user).subscribe(data => {
      console.log(data, alert("User Updated successfully..."));
    },
    error => console.log(error, alert("Failed to update user...")));
  }

  private getRoles() {
    this.userService.getRoleList().subscribe(data => {
      this.roles = data;
    });
  }
  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onClick(){
    this.router.navigate(['users']) 
  }
}
