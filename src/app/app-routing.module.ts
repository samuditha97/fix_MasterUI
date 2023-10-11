import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { ServiceProviderRegComponent } from './service-provider-reg/service-provider-reg.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'customer', component: CustomerRegistrationComponent},
  {path:'service-provider', component: ServiceProviderRegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
