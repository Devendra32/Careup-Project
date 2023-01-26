import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Role } from '../../model/role';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  role: Role = new Role();
  roles!: Role[];
  

  constructor(private userService: UserService, private fb: FormBuilder) { }

  roleForm = this.fb.group({
    roleName : ['']
  });

  ngOnInit(): void {
    this.getRoles();
  }
  onSubmit(roleForm : any) {
    this.addRole(this.roleForm.value);
    this.roleForm.reset();
  }
  addRole(value:any) {
    this.userService.addRole(value).subscribe(data => {

      console.log(data);
      this.getRoles();
    },
    error => console.log(error, alert(error.error)));
  }
  private getRoles() {
    this.userService.getRoleList().subscribe(data => {
      this.roles = data;
    });
  }

}
