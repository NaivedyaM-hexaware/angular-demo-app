import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor(private http: Http) { }

 getCourses():Promise<string[]>{

    return this.http.get('https://reqres.in/api/users')
    .toPromise()
    .then(response => {
       console.log(response.json().data); 
       response.json().data as string[]
      })
    .catch(this.handleError);
    //return ['Angular', 'TypeScript', 'JQuery','Java','Javascript'];
    //return null;;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}

}
