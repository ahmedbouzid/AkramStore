import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user-model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URL = "http://localhost:3000/";

  constructor(private http : HttpClient, private  router:Router) { }
  userDashboaedData() {
    return this.http.get(`${this.URL}user/`)
  }
  productDashboardData() {
    return this.http.get(`${this.URL}product/`);
  }
  allUser():Observable<User> {
    return this.http.get(`${this.URL}user`);
  }
  addUser(userDto:User) {
    return this.http.post(this.URL + 'user' ,userDto ) ;
  }

  oneUser(id:number) {
    return this.http.get(`${this.URL}/${id}`);
  }

  updateUser(id:number , dto : any) {
    return this.http.put(this.URL+id , dto);
  }
  deleteUser(id : number) {
    return this.http.delete(this.URL+id)
  }


}
