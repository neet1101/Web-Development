import { Component, NgModule, OnInit } from '@angular/core';
import { Course } from '../courseInfo';
import { myCourses } from 'src/assets/data/myCourses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: [
  ]
})
export class CourseComponent implements OnInit {
  cou=myCourses;
  goodToGo:boolean[] = [];
  ngOnInit(): void {
  }

onClickMe(i:any) {
  this.goodToGo[i] = !this.goodToGo[i];
}

}
