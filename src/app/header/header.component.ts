import { Component, OnInit } from '@angular/core';
import { pate2869} from '../pate2869';
import { pate2869Data } from 'src/assets/data/pate2869Data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = "Neet Patel";
  login_name: string= "pate2869";
  student_num : number = 991615208;
  campus : string = 'Davis';
  assignment_title: string = "Assignment#3";
  constructor() { }

  ngOnInit(): void {
  }

}
