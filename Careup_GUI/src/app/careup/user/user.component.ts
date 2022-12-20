import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector:'add-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.user);
  }

}
