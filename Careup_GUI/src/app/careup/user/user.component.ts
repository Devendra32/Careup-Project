import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/role';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'add-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User();
  roles!: Role[];

  constructor(private userService: UserService, private fb: FormBuilder) {}

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
    role:[""]
  }); 

  ngOnInit(): void {
    this.getRoles();
  }
  onSubmit() {
    console.log("User : ",this.userForm.value);
    this.saveUser(this.userForm.value);
   }
   saveUser(user:any) {
    this.userService.addUser(user).subscribe(data => {
      console.log(data, alert("User Added successfully..."));
    },
    error => console.log(error, alert("Failed to add user...")));
  }

  private getRoles() {
    this.userService.getRoleList().subscribe(data => {
      this.roles = data;
      console.log("Data: ", this.roles);
      
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
