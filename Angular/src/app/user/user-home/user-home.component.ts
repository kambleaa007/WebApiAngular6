import { Component, OnInit } from '@angular/core';
import { Student } from '../../Model/Student';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  loadComponent : boolean = false;
  student : Student;

  constructor() { }

  ngOnInit() {
  }


  loadMyChildComponent() {
    this.loadComponent ? this.loadComponent = false : this.loadComponent = true;
    
    
  }

}
