import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../model/role';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User();
  roles!: Role[];
  userId!: number;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe( data => {
      this.user = data; 
    }, error => console.log(error));
  }
  

}
