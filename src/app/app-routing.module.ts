import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  { path: 'home' , component: HomeComponent},
  { path: 'login' , component: LoginComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'user', component: UserPageComponent},
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'adminpage', component: AdminpageComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
