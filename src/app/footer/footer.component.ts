import { Component, OnInit } from '@angular/core';
import { pate2869 } from '../pate2869';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  name: string = "Neet Patel";
  login_name: string= "pate2869";
  student_num : number = 991615208;
  campus : string = 'Davis';
  assignment_title: string = "Assignment#3";
  constructor() { }

  ngOnInit(): void {
  }

}
