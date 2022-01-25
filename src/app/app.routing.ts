import { Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "course", component: CoursesComponent },
];
