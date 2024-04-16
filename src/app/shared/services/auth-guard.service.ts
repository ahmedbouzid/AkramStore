import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

// Admin before login check
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardLogin implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    let role = sessionStorage.getItem("role");
    if (role === 'admin') {
      return this.router.parseUrl('/admin/admin-dashboard');
    } else {
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  // Admin after login check
  constructor(private router :Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let role = sessionStorage.getItem("role") ;
    if(role =='admin') {
      return true
    }else {
      this.router.navigateByUrl('/admin/admin-login')
      return false
    }

  }
}


// Customer buyer and seller before check
@Injectable({
  providedIn: 'root'
})
export class SellerBuyerAuthGuardLogin implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    let role = sessionStorage.getItem("role");
    if (role === 'seller') {
      return this.router.parseUrl('/customer/seller-dashboard');
    } else if (role === 'buyer') {
      return this.router.parseUrl('/customer/buyer-dashboard');
    } else {
      return true;
    }
  }
}



@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGuardService {

  // Buyer after login check
  constructor(private router :Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let role = sessionStorage.getItem("role") ;
    if(role =='buyer') {
      return true
    }else {
      this.router.navigateByUrl('/customer/signin')
      return false
    }

  }
}

@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuardService {

  // Seller after login check
  constructor(private router :Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let role = sessionStorage.getItem("role") ;
    if(role =='seller') {
      return true
    }else {
      this.router.navigateByUrl('/customer/signin')
      return false
    }

  }
}
