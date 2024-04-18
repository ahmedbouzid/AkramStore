import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Product } from 'src/app/core/model/product-model';
import { User } from 'src/app/core/model/user-model';
import { Order } from 'src/app/core/model/ordder-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  single_product_id:any;
  user_id:any;
  individual_product!:Product;
  user_detail!:User;
  user_address:any = {};
  user_contact_no:any;
  order_dto!:Order

    constructor(private customerService:CustomerService, private router:Router){}

    ngOnInit(): void {
      this.customerService.currentProduct.subscribe(product=>this.single_product_id =product);
      this.user_id = sessionStorage.getItem('user_session_id');
      this.userAddre(this.user_id);
      this.productDetail(this.single_product_id);
      console.log ("user adress",this.user_address);
    }
    productDetail(single_product_id:any){
      this.customerService.individualProduct(single_product_id).subscribe(data=>{
        this.individual_product = data;
        console.warn("my single Product",this.individual_product)
      },error=>{
        console.log("My error", error)
      })
    }
    userAddre(userID: any) {
      this.customerService.userDetails(userID).subscribe(
        (user: any) => {
          this.user_address = user.adresse;
          this.user_contact_no = user.mobileNumber;


        },
        (error: Error) => {
          console.log('Error fetching user address:', error);
        }
      );
    }
    placeOrder(){
      this.order_dto ={
        id:0,
        userId:this.user_id,
        sellerId:2,
        product:{
          id:this.individual_product.id,
          name:this.individual_product.name,
          uploadPhoto:this.individual_product.uploadPhoto,
          productDesc:this.individual_product.productDesc,
          mrp:this.individual_product.mrp,
          dp:this.individual_product.dp,
          status:this.individual_product.status
        },
        deliveryAddresse:{
          id:0,
          adresseOne:this.user_address.adresseOne,
          adresseTwo:this.user_address.adresseTwo,
          city:this.user_address.city,
          state:this.user_address.state,
          zipCode:this.user_address.zipCode
        },
        contact:this.user_contact_no,
        dataTime: new Date().toLocaleDateString()
      }
      console.log("Place Order DTL", this.order_dto);
      this.customerService.inserNewOrder(this.order_dto).subscribe(data=>{
        alert("Your order Place successfull !");
        this.router.navigateByUrl("/buyer-dashboard");
      }, error=>{
        console.log("order error", error)
      })
    }
  }
