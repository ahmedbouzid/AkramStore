import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    OnlyNumberDirective,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
