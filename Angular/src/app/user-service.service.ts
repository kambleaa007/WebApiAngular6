import { Injectable } from '@angular/core';

import { User } from './Model/User';
//import { Observable } from 'rxjs';
//import { Http, Response, Headers, URLSearchParams, RequestOptions, Jsonp } from '@angular/http';
import { HttpClient } from '@angular/common/http';


import { Student } from './Model/Student';

import { interval, pipe, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
//import { HttpRequest, HttpClient } from 'selenium-webdriver/http';




//--------------------------------------------------
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';


let httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache'
});
let options = {
  headers: httpHeaders
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'json' })
};
//--------------------------------------------------





@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiValues: string[] = [];
  users: User[];
  student: Student;
  students: Student[];

  constructor(private _httpService: HttpClient, private http: Http) { }

  ngOnInit() {


  }


  //-------------------------------------------------------------------------------------
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //-------------------------------------------------------------------------------------

  getarr(): string[] {
    this.http.get('http://localhost:51156/api/values').subscribe(values => {
      this.apiValues = values.json() as string[];
      console.log("in service " + this.apiValues);

    })

    return this.apiValues;
  }


  getUsers(): User[] {
    this.http.get('http://localhost:51156/api/users').subscribe(x => {
      this.users = x.json() as User[];
      console.log("in service " + this.users);
      console.log("in service length " + this.users.length);
    })

    return this.users;
  }







  // add(student: Student) {

  //   this._httpService.post("http://localhost:51156/api/students",
  //     { "Sid": 1, "fname": "Sss", "lname": "XYZ", "rollno": 666, "address": null, "marks": 0, "grade": null, "discount": 0.0 })
  //     .subscribe((data) => { console.log(data) });
  // }



  //-------------------------------------------------------------------------------------------------------

  //private handleError: HandleError;

  /** POST: add a new hero to the server */
  // test(student: Student): Observable<Student> {
  //   console.log("I am called service " + student);
  //   return this._httpService.post<Student>('http://localhost:51156/api/students', student, httpOptions).pipe(
  //     tap((student: Student) => console.log(student),
  //       catchError(this.handleError<Student>('addHero')))
  //   );
  // }

  //-------------------------------------------------------------------------------------------------------


  getStudents(): Student[] {
    this.http.get('http://localhost:51156/api/students').subscribe(x => {
      this.students = x.json() as Student[];
      console.log("in service " + this.students);
      console.log("in service length " + this.students.length);
    })

    return this.students;
  }





  createArticle(student: Student): Observable<Student> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    return this._httpService.post<Student>("http://localhost:51156/api/students", student, options);
  }











}
