import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './buyer/checkout/checkout.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuyerAuthGuardService, SellerAuthGuardService, SellerBuyerAuthGuardLogin } from '../shared/services/auth-guard.service';


const routes:Routes = [
  {path:'signin' ,canActivate:[SellerBuyerAuthGuardLogin], component:SigninComponent},
  {path:'sign-up' ,canActivate:[SellerBuyerAuthGuardLogin], component:SigninComponent},
  {path:'seller-dashboard' ,canActivate:[SellerAuthGuardService], component:SellerDashboardComponent},
  {path:'seller-product' ,canActivate:[SellerAuthGuardService], component:ProductComponent},
  {path:'buyer-dashboard' ,canActivate:[BuyerAuthGuardService], component:BuyerDashboardComponent},
  {path:'checkout' ,canActivate:[BuyerAuthGuardService], component:CheckoutComponent},
]
@NgModule({
  declarations: [
    BuyerDashboardComponent,
    CheckoutComponent,
    SellerDashboardComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) ,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
