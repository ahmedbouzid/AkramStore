import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user-model';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { LoginSignupService } from 'src/app/shared/services/login-signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  signInFormValue : any = {} ;
  userData !: User |any ;

  constructor( private router : Router , private adminService : AdminService, private authService : LoginSignupService) {}

  ngOnInit(): void {
  }
  onSubmitSignIn() {
    this.authService.adminLogin(this.signInFormValue.email , this.signInFormValue.password)
    .subscribe(data => {
      this.userData = data ;
      if(this.userData.length ===1) {
        sessionStorage.setItem('user_session_id' ,this.userData[0].id);
        sessionStorage.setItem('role' ,this.userData[0].role);
        this.router.navigateByUrl('/admin/admin-dashboard');
      } else {
        alert('invalid data ') ;
      }
      console.log('============== <User Details> ======================');
      console.log(this.userData);
      console.log('====================================');
    },
    error => {
      console.log('================<Error>====================');
      console.log('Error' , error);
      console.log('====================================');
    })
  }
}
