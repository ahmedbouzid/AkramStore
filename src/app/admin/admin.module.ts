import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserCrudComponent } from './user-crud/user-crud.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    LoginComponent,
    UserCrudComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
