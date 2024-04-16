import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/core/service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  URL = "http://localhost:3000";

  constructor(private http :HttpClient , private apiService : ApiService) { }

  authLogin(username:string , password : string) : Observable<any> {
    return this.http.get(this.URL+'/user?email='+username+'&password='+password);
  }
  userRegistre(user_detail : any) : Observable<any> {
    return this.http.post(this.URL+'/user',user_detail);
  }
  adminLogin(username:string , password : string) : Observable<any> {
    return this.apiService.get(this.URL+'/user?email='+username+'&password='+password+'&role=admin');
  }
}
