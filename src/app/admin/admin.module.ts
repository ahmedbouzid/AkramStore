import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';


// admin routes
const routes:Routes = [
  {path:'admin-login' , component:LoginComponent},
  {path:'admin-dashboard' , component:AdminDashboardComponent},
  {path:'admin-user' , component:UserCrudComponent},
  {path:'product' , component:ProductComponent},
]

@NgModule({
  declarations: [
    AdminDashboardComponent,
    LoginComponent,
    UserCrudComponent
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
