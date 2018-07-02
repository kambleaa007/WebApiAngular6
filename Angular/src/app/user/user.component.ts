import { Component, OnInit } from '@angular/core';
import { Student } from './../Model/Student'
import { UserServiceService } from './../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  student: Student;
  students: Student[];

  constructor(private uservice: UserServiceService) {
    this.student = new Student();
  }

  ngOnInit() {
  }


  // addStudent() {
  //   console.log(this.student);
  //   this.uservice.postStudent(this.student as Student).subscribe(x => {
  //     this.students.push(x);
  //     console.log(this.student);

  //   });
  // }

  add(){
    console.log(this.student);
    this.uservice.add(this.student);
  }

//---------------------------------------------------------------------------------

  test(){
    console.log(this.student+" "+this.student.Sid);
    //this.uservice.test(this.student).subscribe(x => console.log(x));
    this.uservice.createArticle(this.student).subscribe(
      x => console.log(x)
    );
  }

//---------------------------------------------------------------------------------


//---------------------------------------------------------------------------------

gettest(){
  console.log(this.student);
  this.students = this.uservice.getStudents();
  console.log(this.student);
}

//---------------------------------------------------------------------------------


  // postTest(){
  //   console.log("see now ..."+this.student);
  //   console.log(this.student)
  //   this.uservice.postTest(this.student).subscribe(
  //     success => {
  //       console.log("success"+success) },
  //     error => {     
  //       console.log("errrr "+error)
  //     }     
  //   );
  // }

  getStudent(){

  }



}
