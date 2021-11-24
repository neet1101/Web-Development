import { Component, OnInit } from '@angular/core';
import { myCourses } from 'src/assets/data/myCourses';
import { Course } from './courseInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pate2869A3';
  mycourses!:Course[];
  ngOnInit() {}
}
