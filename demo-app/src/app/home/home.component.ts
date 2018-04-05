import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string ="Pradeep";
  title:string= "Angular 4";

  constructor(private router:Router) { }
 
  login(){
    console.log("test <<<<>>>>");
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
  }

}
