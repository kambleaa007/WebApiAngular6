import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { UserHomeComponent } from './user/user-home/user-home.component';

import { CarouselModule } from 'ngx-bootstrap';
import { AddUserComponent } from './user/add-user/add-user.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'about',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/user',
    component: UserHomeComponent,
    children: [
      {
        path: 'addStudent',
        component: AddUserComponent,
        outlet: 'Student1'
      }, {
        path: 'editStudent',
        component: UserComponent,
        outlet: 'Student2'
      }
    ]
  }
  //,
  //{ path: '**', redirectTo: 'index' }


];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserComponent,
    LoginComponent,
    UserHomeComponent,
    AddUserComponent
  ],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
