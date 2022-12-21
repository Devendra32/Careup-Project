import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/role';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  roles!: Role[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getRoles();
  }
  private getRoles() {
    this.userService.getRoleList().subscribe(data => {
      this.roles = data;
    });
  }

}
