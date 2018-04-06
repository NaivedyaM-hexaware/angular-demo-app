import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './course.service';
import { AuthorsComponent } from './authors/authors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpModule } from '@angular/http';
import { TestComponent } from './test/test.component';

import { UserService } from './user.service';
import { EventComponent } from './event/event.component';

/*const appRoutes:Routes=[
  {
    path:'dashboard', 
    component: DashboardComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    component: CoursesComponent
  }
]*/

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    TestComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
   // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CourseService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
