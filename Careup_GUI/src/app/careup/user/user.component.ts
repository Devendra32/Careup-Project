import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/role';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'add-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User();
  roles!: Role[];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    // this.getRoles();
  }
  onSubmit(data:any) {
    console.log(data);
    // this.saveUser();
  }
  saveUser() {
    this.userService.addUser(this.user).subscribe(data => {
      console.log(data);
      alert("User added successfully...");
    },
      error => console.log(error));
    alert("Failed to add user...");
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
