import { Component, OnInit } from '@angular/core';
import { Course } from '../courseInfo';
import { myCourses } from 'src/assets/data/myCourses';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: [
  ]
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
