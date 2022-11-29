import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  onCourses=[
    {
      image:'../../../../assets/images/ang.png',
      title:'Card Title',
      desc:'Some quick example text to build on the card title and make up the bulk of the cards content.',
      progress:'bg-warning role="progressbar" style="width: 20%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40"',
      level:'easy'
    }
     
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
