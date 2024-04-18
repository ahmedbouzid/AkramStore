import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user-model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userProfileForm!: FormGroup;
  userProfile: boolean = false;
  user_id!: any;
  userDate!: any;
  userUpdate: any;
  useDto!: any;
  userProfilePicture: any;
  userLanguage: any;
  userRole!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.user_id = sessionStorage.getItem('user_session_id');
    this.userProfileForm = this.fb.group({
      name: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      password: ['', Validators.required],
      uploadPhoto: ['', Validators.required],
      aboutYou: ['', Validators.required],
      gender: ['', Validators.required],
      adresseOne: ['', Validators.required],
      adresseTwo: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      language: ['', Validators.required],
    });
    this.editUserData(this.user_id);
  }

  get rf() {
    return this.userProfileForm.controls;
  }
  editUserData(id: any) {
    this.userService.oneUser(id).subscribe(
      (data : any) => {
        this.userDate = data;
        this.userProfilePicture = this.userDate.uploadPhoto ;
        this.userLanguage = this.userDate.language;
        this.userRole = this.userDate.role;
        this.userProfileForm.patchValue(this.userDate);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  updateProfile() {

    if (this.userProfileForm.invalid) return;
    this.userUpdate = this.userProfileForm.value;
    const useDto: any = {
      ...this.userUpdate,
      uploadPhoto:
        this.userUpdate.uploadPhoto == ''
          ? this.userProfilePicture
          : this.userUpdate.uploadPhoto,
      adresse: {
        id: 0,
        adresseOne: this.userUpdate.adresseOne,
        adresseTwo: this.userUpdate.adresseTwo,
        city: this.userUpdate.city,
        state: this.userUpdate.state,
        zipCode: this.userUpdate.zipCode,
      },
    };
    this.userService.updateUser(this.user_id, useDto).subscribe(
      (data) => {
        alert('Profile updated Succufully');
        this.router.navigateByUrl(this.getDashboardRoute());

      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
  private getDashboardRoute(): string {
    switch (this.userRole) {
      case 'admin':
        return '/admin/admin-dashboard';
      case 'seller':
        return '/customer/seller-dashboard';
      case 'buyer':
        return '/customer/buyer-dashboard';
      default:
        return '/';
    }
  }
}
