import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './buyer/checkout/checkout.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';


const routes:Routes = [
  {path:'signin' , component:SigninComponent},
  {path:'sign-up' , component:SigninComponent},
  {path:'seller-dashboard' , component:SellerDashboardComponent},
  {path:'seller-product' , component:ProductComponent},
  {path:'buyer-dashboard' , component:BuyerDashboardComponent},
  {path:'checkout' , component:CheckoutComponent},
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
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
