import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  public getUsers(){
     return [
      {
        "name":"Pradeep",
        "company":"Hexaware"
      },
      {
        "name":"Vikram",
        "company":"Hexaware"
      },
      {
        "name":"Manish",
        "company":"Hexaware"
      }
    ];
  }
}
