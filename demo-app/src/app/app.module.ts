import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './course.service';
import { AuthorsComponent } from './authors/authors.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
