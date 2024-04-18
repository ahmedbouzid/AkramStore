import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { User } from 'src/app/core/model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = "http://localhost:3000/";

  constructor(private http : HttpClient, private  router:Router) { }
  userDashboaedData() {
    return this.http.get(this.URL + 'user/')
  }


  oneUser(id: any) {
    return this.http.get<any>(`${this.URL}user/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          // Handle 404 error (user not found) appropriately
          console.log('User not found');
        } else {
          // Handle other errors
          console.error('Error fetching user:', error);
        }
        throw error; // Rethrow the error for the component to handle
      })
    );
  }


  updateUser(id:any , dto : any) :Observable<any>{
    return this.http.put(this.URL+ 'user/'+id, dto)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          // Handle 404 error (user not found) appropriately
          console.log('User not found');
        } else {
          // Handle other errors
          console.error('Error fetching user:', error);
        }
        throw error; // Rethrow the error for the component to handle
      })
    );

  }
  deleteUser(id : any) {
    return this.http.delete(`${this.URL}user/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          // Handle 404 error (user not found) appropriately
          console.log('User not found');
        } else {
          // Handle other errors
          console.error('Error fetching user:', error);
        }
        throw error; // Rethrow the error for the component to handle
      })
    )
  }


}
