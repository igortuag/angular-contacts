import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService {
  getCourses() {
    return [
      {
        id: 1,
        name: "Angular 2",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "Vue",
      },
    ];
  }

  constructor() {}
}
