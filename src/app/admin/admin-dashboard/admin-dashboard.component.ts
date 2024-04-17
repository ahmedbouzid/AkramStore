import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements  OnInit {

  user_dashboard_data :any ;
  total_user :number = 0 ;
  seller_user :number = 0 ;
  buyer_user :number = 0 ;
  admin_user :number = 0 ;

  product_dashboard_data :any ;
  total_product : number = 0 ;
  publish_product : number = 0 ;
  innactive_product : number = 0 ;
  draft_product : number = 0 ;

  constructor( private router : Router , private adminService :AdminService) {}

  ngOnInit(): void {
    this.adminUserDashboard ();
    this.adminProductDashboard();

  }

  userDashboord() {
    this.router.navigateByUrl('/admin/admin-user')
  }

  productDashboord() {
    this.router.navigateByUrl('/admin/product')
  }

  adminUserDashboard() {
    this.adminService.userDashboaedData().subscribe(data => {
      this.user_dashboard_data = data ;
      console.log('================user_dashboard_data====================');
      console.log(this.user_dashboard_data);
      console.log('====================================');
      for(let user in this.user_dashboard_data) {
        if(this.user_dashboard_data[user].role ==='admin') {
          ++this.admin_user ;
        }else if(this.user_dashboard_data[user].role ==='seller') {
          ++this.seller_user ;
        } else if(this.user_dashboard_data[user].role ==='buyer') {
          ++this.buyer_user ;
        }
        ++this.total_user ;
      }
    } , error => {
      console.log('Error' , error);
    })
  }

  adminProductDashboard() {
    this.adminService.productDashboardData().subscribe(data => {
      this.product_dashboard_data = data ;
      console.log('===============product_dashboard_data=====================');
      console.log(this.product_dashboard_data);
      console.log('====================================');
      for(let status in this.product_dashboard_data) {
        if (this.product_dashboard_data[status].status==='publish') {
          ++this.publish_product ;
        }else if (this.product_dashboard_data[status].status==='inactive'){
          ++this.innactive_product;
      } else if (this.product_dashboard_data[status].status==='draft') {
        ++this.draft_product ;
      }
      ++this.total_product ;
    }
    } ,

    error => {
      console.log('Error product' , error);

    } )
  }
}

