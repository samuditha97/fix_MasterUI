import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AuthGuard } from './AuthGuard';
import { ServicesComponent } from './components/services/services.component';
import { TechnicianListComponent } from './components/technician-list/technician-list.component';
import { BookingComponent } from './components/booking/booking.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'customers', component: LandingComponent },
  {path: 'myprofile', component: CustomerComponent},
  {path: 'services', component: ServicesComponent},
  { path: 'technicians/:id', component: TechnicianListComponent},
  {path: 'appointments', component: AppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
