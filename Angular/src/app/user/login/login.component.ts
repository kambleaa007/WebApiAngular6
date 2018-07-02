import { Component, OnInit } from '@angular/core';
import { User } from './../../Model/User';
import { UserComponent } from '../user.component';
import { UserServiceService } from '../../user-service.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMsg: string;
  name: string;
  password: string;

  apiValues: string[];
  users: User[];

  flag: boolean = false;
  len: number;


  constructor(private uservice: UserServiceService) { }

  ngOnInit() {
  }

  login() {
    this.name = this.user.UserName;
    this.password = this.user.Password;

    //console.log("name is "+this.name);
    //console.log("password is "+this.password);

    this.get();

    //console.log("flag is "+this.flag+" users "+this.users);  


  }

  get(): void {
    //console.log(this.apiValues);

    //
    //this.uservice.get().subscribe(x => this.apiValues = x);
    // this leads me to the
    // Response with status: 200 OK for URL: http://localhost:51156/api/values


    this.apiValues = this.uservice.getarr();
    this.users = this.uservice.getUsers();
    //console.log("In login component "+this.apiValues);
    //console.log("In login component "+this.users);
  }

}
