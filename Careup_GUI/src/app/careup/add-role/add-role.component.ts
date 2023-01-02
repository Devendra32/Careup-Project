import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Role } from 'src/app/role';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  role: Role = new Role();
  roles!: Role[];
  rolefail : string = '';
  constructor(private userService: UserService, private fb: FormBuilder) { }

  roleForm = this.fb.group({
    roleName : ['']
  });

  

  ngOnInit(): void {
    this.getRoles();
  }
  onSubmit(roleForm : any) {
    console.log(this.roleForm.value);
    this.addRole(this.roleForm.value);

  }
  addRole(value:any) {
    this.userService.addRole(value).subscribe(data => {
      console.log(data, alert("Role Successfully Added..."));
      this.getRoles();
    },
    error => console.log(error, alert("Role Already Exist...")));
  }
  private getRoles() {
    this.userService.getRoleList().subscribe(data => {
      this.roles = data;
    });
  }

}
