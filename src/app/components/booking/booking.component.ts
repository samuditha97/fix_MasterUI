import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm: FormGroup;
  customerDetails: any; // Property to store customer details
  selectedServiceId: string = '';
  serviceId: string = '';
  serviceName: string = ''; // Declare serviceName here
  constructor(
    private formBuilder: FormBuilder,
    private customerDetailsService: CustomerService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<BookingComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.bookingForm = this.formBuilder.group({
      customerName: '',
      customerAddress: '',
      customerMobileNo: '',
      serviceName: '',
      appointmentDate: '',
      requirement: '',
      isCanceled: false,
      technicianId: '',
      location: '',
    });

    if (data && data.technicianId) {
      this.bookingForm.get('technicianId')?.setValue(data.technicianId);
    }
    this.route.params.subscribe((params) => {
      this.serviceId = params['id'];
      this.serviceName = params['serviceName']; 
      console.log('Service ID:', this.serviceId);
      this.bookingForm.get('serviceName')?.setValue(this.serviceName); 
    });
  }

  ngOnInit() {
    // Fetch customer details based on user's token
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
