import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm: FormGroup;
  customerDetails: any;
  selectedServiceId: string = '';
  serviceId: string = '';
  serviceName: string = '';
  customerId: string | null; 
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private customerDetailsService: CustomerService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<BookingComponent>,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.bookingForm = this.formBuilder.group({
      id : '',
      customerId: '',
      customerName: '',
      customerAddress: '',
      customerMobileNo: '',
      serviceName: '', // Add the serviceName field
      appoinmentDate: '',
      requirement: '',
      isCanceled: false,
      technicianId: '',
      location: '',
    });

    if (data && data.technicianId) {
      this.bookingForm.get('technicianId')?.setValue(data.technicianId);
    }
    this.customerId = this.customerDetailsService.getUserIdFromToken(); // Get the customer ID
    if (this.customerId != null) {
      this.bookingForm.get('customerId')?.setValue(data.customerId);
    }
  }

  onSubmit() {
    // Set the 'location' field to the value of 'customerAddress'
    this.bookingForm.get('appoinmentDate')?.setValue('2023-10-13T14:30');
    this.bookingForm.get('location')?.setValue(this.bookingForm.get('customerAddress')?.value);
    this.bookingForm.get('customerId')?.setValue(this.customerId);
  
    const bookingData = this.bookingForm.value;
    this.customerDetailsService.submitBooking(bookingData).subscribe(
      (response) => {
        // Handle the success response
        console.log('Booking submitted successfully', response);
        this.showSuccessSnackbar('Booking submitted successfully');
        // Close the dialog or navigate to another page
        this.dialogRef.close();
      },
      (error) => {
        // Handle the error response
        console.error('Booking submission failed', error);
        this.showErrorSnackbar('Booking submission failed');
      }
    );
  }
  
  


 showSuccessSnackbar(message: string) {
  this.snackBar.open(message, 'Close', {
    duration: 3000,
    panelClass: ['snackbar-success'], 
  });
}



showErrorSnackbar(message: string) {
  this.snackBar.open(message, 'Close', {
    duration: 3000,
    panelClass: ['snackbar-error'], 
  });
}

  ngOnInit() {
    const userId = this.customerDetailsService.getUserIdFromToken();
    if (userId != null) {
      this.customerDetailsService.getCustomerDetails(userId).subscribe((customerDetails: any) => {
        this.customerDetails = customerDetails;
        // Populate the form fields with customer details
        this.bookingForm.patchValue({
          customerName: customerDetails.firstName + ' ' + customerDetails.lastName,
          customerAddress: customerDetails.address,
          customerMobileNo: customerDetails.mobileNo,
        });
      });
    }
  }

}
