import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/role';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id!: number;
  user: User = new User();
  roles!: Role[];
  jsonObject:any;
  constructor(private userService: UserService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getRoles();
    this.route.snapshot.params['id'];
    this.userService.getUserById().subscribe(data =>{
      this.user = data;
    }, error => console.log(error));

  }
  onSubmit(data: any) {
   // data ={role:data.roleId};
    this.user = data;
   //console.log(data);     
    console.log(this.user);
   // this.user.role = data.roleId;
   this.jsonObject = {
    "firstName":data.firstName,
    "lastName":data.lastName,
    "emailId":data.emailId,
    "mobileNo":data.mobileNo,
    "address":data.address,
    "address2":data.address2,
    "city":data.city,
    "state":data.state,
    "pincode":data.pincode,
    "role":{
      "roleId":data.roleId
    }
   }
   console.log(this.jsonObject);
   this.saveUser();
  }
  saveUser() {
    this.userService.addUser(this.jsonObject).subscribe(data => {
      console.log(data);
      alert("User added successfully...");
    },
      error => console.log(error));
    alert("Failed to add user...");
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
