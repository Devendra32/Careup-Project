import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/role';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

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
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRoles();
    console.log(this.roles);
    
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe( data => {
      this.user = data;
      
    }, error => console.log(error));
  }
  onSubmit() {
    // console.log("User : ",this.userUpdateForm.value);
    // this.updateUser(this.userUpdateForm.value);
    // this.userUpdateForm.reset();
   }
   updateUser(user:any) {
    this.userService.updateUserDetails(user).subscribe(data => {
      console.log(data, alert("User Added successfully..."));
    },
    error => console.log(error, alert("Failed to add user...")));
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

}
