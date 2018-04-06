import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  
  constructor(private userService: UserService) { }

  users = this.userService.getUsers();
  //users = null;

  ngOnInit() {
  }

}
