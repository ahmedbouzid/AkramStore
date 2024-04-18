import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/model/product-model';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.scss']
})
export class BuyerDashboardComponent implements OnInit  {

  allProducts : Product[]  = [] ;
  showCheckout : boolean = false ;
constructor(private router : Router , private customerService :CustomerService) {}
  ngOnInit(): void {
    this.getAllProduct()
  }
  getAllProduct() {
    this.customerService.allProduct().subscribe((data:any) => {
      this.allProducts = data ;
    } ,(error : Error)=> {
      console.log("Error , " , error);
    })
  }
  byProduct(id : any) {
    this.showCheckout = true ;
    this.customerService.quickByProduct(id) ;
    this.router.navigateByUrl('/customer/checkout')
  }
  addToCard(){
    alert('Showcase') ;
  }
}
