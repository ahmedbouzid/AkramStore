import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Ecommerce';
  screenHeight : number = window.innerHeight ;
  screenWidth:number = window.innerWidth ;
  footerMaxHeight :number = this.screenHeight - 160;
  resizeSubscription : Subscription | undefined ;

  constructor(){
  }
  ngOnInit(): void {
    this.getScreenSize(event)
  }
  @HostListener('window:resize',['$event'])

  getScreenSize(event:any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth ;
    this.footerMaxHeight = this.screenHeight -160 ;

  }
}
