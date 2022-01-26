import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"],
})
export class CourseDetailComponent implements OnInit {
  id: string;
  inscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.inscription = this.route.params.subscribe((params: any) => {
      this.id = params["id"];
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
}
