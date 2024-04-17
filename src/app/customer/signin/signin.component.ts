import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user-model';
import { LoginSignupService } from 'src/app/shared/services/login-signup.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  registreForm: boolean = false;
  signUpForm!: FormGroup;
  signInForm!: FormGroup;
  signUpSubmited: boolean = false;
  href: string = '';
  user_data: any;
  user_dto!: User;
  user_registre_data: any;
  signInFormValue: any = {};
  loginForm: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginSignupService
  ) {}

  ngOnInit(): void {
    this.href = this.router.url;
    if (this.href == '/customer/sign-up') {
      this.registreForm = true;
    } else if (this.href == '/customer/signin') {
      this.loginForm = true;
    }
    this.signUpForm = this.fb.group({
      name: ["" , Validators.required],
      mobileNumber: ["" , Validators.required],
      age: ["" , Validators.required],
      email: ["" , Validators.required],
      dob: ["" , Validators.required],
      password: ["" , Validators.required],
      uploadPhoto: ["" , Validators.required],
      aboutYou: ["" , Validators.required],
      agreeTc: ["" , Validators.required],
      gender: ["" , Validators.required],
      adresseOne: ["" , Validators.required],
      adresseTwo: ["" , Validators.required],
      city: ["" , Validators.required],
      state: ["" , Validators.required],
      zipCode: ["" , Validators.required],
      role: ["" , Validators.required],
      language: ["" , Validators.required],
    })
  }

  getregistrForm() {
    return this.signUpForm.controls;
  }

  onSubmitSignUp(){
    this.signUpSubmited = true ;
    if(this.signUpForm.invalid) return ;
    console.log('====================================');
    console.log(this.signUpForm.value);
    console.log('====================================');
    this.user_registre_data = this.signUpForm.value ;
    this.user_dto = {
      aboutYou : this.user_registre_data.aboutYou,
      age: this.user_registre_data.age,
      agreeTc:this.user_registre_data.agreeTc,
      dob:this.user_registre_data.dob,
      email:this.user_registre_data.email,
      language:this.user_registre_data.language,
      role:this.user_registre_data.role ,
      gender:this.user_registre_data.gender,
      name : this.user_registre_data.name,
      password: this.user_registre_data.password,
      uploadPhoto:this.user_registre_data.uploadPhoto,
      mobileNumber : this.user_registre_data.mobileNumber,
      adresse: {
        id:0 ,
        adresseOne:this.user_registre_data.adresseOne,
        adresseTwo:this.user_registre_data.adresseTwo,
        city : this.user_registre_data.city,
        state: this.user_registre_data.state,
        zipCode :this.user_registre_data.zipCode
      }
    }

      console.log('Yoooooooooo');
    this.loginService.userRegistre(this.user_dto).subscribe(data => {
      console.log('Yoooooooooo');

      alert('User Registration passed succufully');
      this.router.navigateByUrl('/customer/signin')
    })

  }

  onSubmitSignin(){
    this.loginService.authLogin(this.signInFormValue.email ,this.signInFormValue.password)
    .subscribe(data=> {
      this.user_data =data ;
      if(this.user_data.length ==1) {
        if(this.user_data[0].role =='seller') {
          sessionStorage.setItem('user_session_id' , this.user_data[0].id);
          sessionStorage.setItem('role' , this.user_data[0].role);
          this.router.navigateByUrl('/customer/seller-dashboard') ;

        }else if(this.user_data[0].role =='buyer') {
          sessionStorage.setItem('user_session_id' , this.user_data[0].id);
          sessionStorage.setItem('role' , this.user_data[0].role);
          this.router.navigateByUrl('/customer/buyer-dashboard') ;
        }else {
          alert('Invalid login data')
        }
      }else {
        alert('Invalid')
      }
      console.log(this.user_data);

    }, error => {
      console.log("my error" , error);

    })
  }
}
