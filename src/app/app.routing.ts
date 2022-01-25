import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CoursesComponent } from "./courses/courses.component";

const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "course", component: CoursesComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
