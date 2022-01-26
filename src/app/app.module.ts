import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { CoursesComponent } from "./courses/courses.component";
import { routing } from "./app.routing";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { CoursesService } from "./courses/courses.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CoursesComponent,
    CourseDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
