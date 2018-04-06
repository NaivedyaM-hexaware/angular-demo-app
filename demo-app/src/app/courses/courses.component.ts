import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

  courses;
  isSelected = true;
  constructor(service: CourseService) {
    this.courses = service.getCourses();
    console.log('sdsdff');
    console.log(this.courses);
   }

}
