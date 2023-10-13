import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/Services/customer.service';
import { BookingDto } from 'src/app/dto/booking.interface';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  bookings: BookingDto[] = [];

  constructor(
    private customerService: CustomerService
  ) {
  }

  ngOnInit() {
    const customerId = this.customerService.getUserIdFromToken();

    if (customerId) {
      this.customerService.getBookingsByCustomerId(customerId).subscribe((bookings: BookingDto[]) => {
        this.bookings = bookings;
        console.log("Bookings", this.bookings);
      });
    } else {
      console.error("Customer ID not found in token.");
    }
  }

  cancelBooking(bookingId: string) {
    // Make an HTTP request to cancel the booking
    this.customerService.cancelBooking(bookingId).subscribe((response) => {
      // If the cancellation is successful, update the booking status locally
      const canceledBooking = this.bookings.find((booking) => booking.id === bookingId);
      if (canceledBooking) {
        canceledBooking.isCanceled = false;
      }
    });
  }
}
