import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, Adresse } from 'src/app/core/model/user-model'; // Import User and Adresse classes

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss'],
})
export class UserCrudComponent implements OnInit {
  all_user_data: any;
  addEditUserForm!: FormGroup;
  user_reg_data: any;
  edit_user_id: any;
  upload_file_name!: string | any;
  addEditUser: boolean = false;
  add_user: boolean = false;
  edit_user: boolean = false;
  popup_header!: string;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllUser();
    this.addEditUserForm = this.fb.group({
      name: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      adresseOne: ['', Validators.required],
      adresseTwo: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      language: ['', Validators.required],
      gender: ['', Validators.required],
      aboutYou: ['', Validators.required],
      uploadPhoto: ['', Validators.required],
      agreeTc: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  getAllUser() {
    this.adminService.allUser().subscribe(
      (data) => {
        this.all_user_data = data;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  addUserPopup() {
    this.edit_user = false;
    this.add_user = true;
    this.popup_header = 'Add New User';
    this.addEditUserForm.reset();
  }

  addUser() {
    if (this.addEditUserForm.invalid) {
      alert('Please fill all required fields.');
      return;
    }
    this.user_reg_data = this.addEditUserForm.value;
    const user_dto: User = {
      ...this.user_reg_data,
      adresse: {
        id: 0,
        adresseOne: this.user_reg_data.adresseOne,
        adresseTwo: this.user_reg_data.adresseTwo,
        city: this.user_reg_data.city,
        state: this.user_reg_data.state,
        zipCode: this.user_reg_data.zipCode,
      },
    };
    this.adminService.addUser(user_dto).subscribe(
      (data) => {
        this.addEditUserForm.reset();
        this.getAllUser();
        this.addEditUser = false;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  editUserPopup(user_id: any) {
    this.edit_user_id = user_id;
    this.edit_user = true;
    this.add_user = false;
    this.popup_header = 'Edit User';
    this.adminService.oneUser(user_id).subscribe(
      (data) => {
        this.upload_file_name = data.uploadPhoto;
        this.addEditUserForm.patchValue(data); // Update form values using patchValue
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  updateUser() {
    if (this.addEditUserForm.invalid) {
      alert('Please fill all required fields.');
      return;
    }
    this.user_reg_data = this.addEditUserForm.value;
    const user_dto: User = {
      ...this.user_reg_data,
      adresse: {
        id: 0,
        adresseOne: this.user_reg_data.adresseOne,
        adresseTwo: this.user_reg_data.adresseTwo,
        city: this.user_reg_data.city,
        state: this.user_reg_data.state,
        zipCode: this.user_reg_data.zipCode,
      },
      uploadPhoto: this.user_reg_data.uploadPhoto || this.upload_file_name, // Handle uploadPhoto value
    };
    this.adminService.updateUser(this.edit_user_id, user_dto).subscribe(
      (data) => {
        this.addEditUserForm.reset();
        this.getAllUser();
        this.edit_user = false;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  deleteUser(user_id: any) {
    this.adminService.deleteUser(user_id).subscribe(
      (data) => {
        this.getAllUser();
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
