import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {  MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { LandingComponent } from './components/landing/landing.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginPopupComponent } from './components/customerLogin/login-popup/login-popup.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { NgImageSliderModule } from 'ng-image-slider';
import { CustomerComponent } from './components/customer/customer.component';
import { ServicesComponent } from './components/services/services.component';
import { SwiperModule } from 'swiper/angular';
import { TechnicianListComponent } from './components/technician-list/technician-list.component';
import { BookingComponent } from './components/booking/booking.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppointmentsComponent } from './components/appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerRegistrationComponent,
    LandingComponent,
    LoginPopupComponent,
    CustomerComponent,
    ServicesComponent,
    TechnicianListComponent,
    TechnicianListComponent,
    BookingComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    NgImageSliderModule,
    MatFormFieldModule,
    MatDatepickerModule

  ],
  providers: [ { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },],
  bootstrap: [AppComponent]
})
export class AppModule { }
