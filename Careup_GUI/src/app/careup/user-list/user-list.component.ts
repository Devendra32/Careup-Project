import { Component, OnInit } from '@angular/core';
import {User} from '../../user'

@Component({
  selector: 'users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor() { }

  ngOnInit(): void {
  }

}
