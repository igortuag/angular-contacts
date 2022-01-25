import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"],
})
export class CourseDetailComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {}
}
