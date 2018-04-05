import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent{
  authors=[
    {
      "name": "Pradeep",
      "place": "Bangalore"
    },
    {
      "name": "Kishore",
      "place": "Mumbai"
    },
    {
      "name": "Vinay",
      "place": "Mumbai"
    },
    {
      "name": "Krishna",
      "place": "Mumbai"
    }
  ];
  constructor() { }


}
