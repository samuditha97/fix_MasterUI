import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../Services/customer.service';
import { ToastrService } from 'ngx-toastr'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginPopupComponent } from '../components/customerLogin/login-popup/login-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private snackBar: MatSnackBar,private dialog: MatDialog, private https: HttpClient) {

    this.registrationForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
}
onSubmit() {
  if (this.registrationForm.valid) {
    const customerData = this.registrationForm.value;
    console.log("kkkkkk");
    this.customerService.registerCustomer(customerData).subscribe(
      response => {
        console.log('Customer registered successfully:', response);
        this.showSnackBar('Customer registered successfully', 'Success');
        this.registrationForm.reset();
      },
      error => {
        console.error('Error registering customer:', error);
        this.showSnackBar('Error registering customer', 'Error');
      }
    );
  }
}

showSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 3000,
  });
}

showLoginPopup() {
  const dialogRef = this.dialog.open(LoginPopupComponent, {
    width: '250px' // Set the width of the dialog as needed
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // The customer logged in, and you can access the email from result.email
      console.log(`Logged in with email: ${result.email}`);
    }
  });
}
}