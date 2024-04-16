import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged_in : boolean = false;
  language:string ='english';
  user_role :string | null = '' ;

  constructor( private router : Router){}
  ngOnInit(): void {
  }
  switchLanguage(language:string) {

  }
  ngDoCheck() {
    this.user_role = sessionStorage.getItem('role');
    const user_session_id = sessionStorage.getItem('user_session_id') ;
    if(user_session_id) {
      this.logged_in = true ;
    }
  }

  logout() {
    sessionStorage.removeItem('user_session_id');
    sessionStorage.removeItem('role');
    this.router.navigateByUrl('customer/signin') ;
    location.reload() ;
  }
}
