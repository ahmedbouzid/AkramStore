import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/' , pathMatch:'full' },
  {path:'' , component:HomeComponent},
  {path:'my-profile' , component:UserProfileComponent} ,
  {path:'contact-us' , component:ContactUsComponent},
  // Admin Module
  {path:'admin' ,loadChildren:()=> import('./admin/admin.module').then(m => m.AdminModule)
  },
  // Load Customer Module
  {path:'customer' , loadChildren:() => import('./customer/customer.module').then(m => m.CustomerModule)
} ,
{path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
