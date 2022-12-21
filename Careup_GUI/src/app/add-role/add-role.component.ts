import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/role';
import { UserService } from 'src/app/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  role: Role = new Role();
  roles!: Role[];
  rolefail : string = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getRoles();
  }
  onSubmit(rolef: NgForm) {
    console.log(this.role);
    this.addRole();
    rolef.reset();

  }
  addRole() {
    this.userService.addRole(this.role).subscribe(data => {
      console.log(data, alert("Role Successfully Added..."));
      
    },
      error => console.log(error, alert("Role Already Exist...")));
  }
  private getRoles() {
    this.userService.getRoleList().subscribe(data => {
      this.roles = data;
    });
  }

}
