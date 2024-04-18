import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient , private router:Router) { }
  URL = 'http://localhost:3000/' ;
  singleProductID = new BehaviorSubject(null) ;
  currentProduct = this.singleProductID.asObservable() ;


  allProduct():Observable<any> {
    return this.http.get(this.URL+'products') ;
  }

  quickByProduct(produc_id:any) {
    if(produc_id) {
      return this.singleProductID.next(produc_id) ;
    }
    }
  individualProduct(product_id : any) {
    return this.http.get(this.URL + 'products/'+product_id)
  }
  userDetails(id : any) {
    return this.http.get(`${this.URL}user/${id}`)
  }
  inserNewOrder(orderDto :any) {
    return this.http.post(this.URL+'orders/' , orderDto)
  }
  orderDashboardData() : Observable<any>{
    return this.http.get(this.URL + 'orders/') ;
  }
  orderDashboardDetails(): Observable<any> {
    return this.http.get(this.URL +'products/')
  }
}
