import { Component, OnInit } from '@angular/core';
import { Role } from '../../model/role';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'add-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User();
  roles!: Role[];

  constructor(
    private userService: UserService, 
    private fb: FormBuilder
    // private router: Router
    ) {}

  userForm = this.fb.group({
    userId: [""],
    firstName: [""],
    lastName: [""],
    emailId: [""],
    mobileNo: [""],
    address: [""],
    address2: [""],
    city: [""],
    state: [""],
    pincode: [""],
    photo: [""],
    role:this.fb.group({
      roleId:[""]
    })
  }); 

  ngOnInit(): void {
    this.getRoles();
  }
  onSubmit() {
    // console.log("User : ",this.userForm.value);
    this.saveUser(this.userForm.value);
    this.userForm.reset();
   }
   saveUser(user:any) {
    this.userService.addUser(user).subscribe(data => {
      console.log(data, alert("User Added successfully..."));
    },
    error => console.warn(error, alert(error.error)));
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
