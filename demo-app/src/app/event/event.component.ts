import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-event',
  template: `
    <div [style.background-color]="users.length ? 'green': 'red'">
      <h2>Users</h2>
      <h2 [textContent]="users.length"></h2>
      <img src="{{imageUrl}}"/>
      <img [src]="imageUrl"/>
      <ul>
        <li *ngFor="let user of users">{{ user.name }}</li>
      </ul>
       <span>Is Active - {{isActive}}</span>
      <button (click)="onClick($event)" class="btn" [class.btn-primary]="!isActive" [style.backgroundColor]="users.length ? 'red': 'blue'">Save</button>
    </div>
  `,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  imageUrl:string="https://www.w3schools.com/angular/pic_angular.jpg";
  isActive:boolean=false;

  constructor(private userService: UserService) { }

  onClick($event){
    console.log("button was clicked ",$event);
  }

  ngOnInit() {
  }

   users:any = this.userService.getUsers();
}
