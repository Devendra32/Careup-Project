import { Component, OnInit } from '@angular/core';
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
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getRoles();
  }
  onSubmit() {
    console.log(this.role);
    this.addRole();

  }
  addRole() {
    this.userService.addRole(this.role).subscribe(data => {
      console.log(data);
      
    },
      error => console.log(error)
      );
  }
  private getRoles() {
    this.userService.getRoleList().subscribe(data => {
      this.roles = data;
    });
  }

}
