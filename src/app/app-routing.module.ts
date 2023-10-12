import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AuthGuard } from './AuthGuard';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'customer', component: LandingComponent },
  {path: 'myprofile', component: CustomerComponent , canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
