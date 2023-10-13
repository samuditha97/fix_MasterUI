import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Make sure to import HttpClient
import { CustomerService } from 'src/app/Services/customer.service';
import { TechnicianDTO } from 'src/app/dto/technician.interface';
import { MatDialog } from '@angular/material/dialog';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.css']
})
export class TechnicianListComponent {
  technicians: TechnicianDTO[] = [];
  serviceId: string = ''; 

  constructor(
    private route: ActivatedRoute,
    private technicianService: CustomerService,
    public dialog: MatDialog,
  ) {
    this.route.params.subscribe(params => {
      this.serviceId = params['id']; // Store the serviceId
      console.log("Service ID:", this.serviceId);

      // Filter technicians based on the serviceId
      this.technicianService.getTechniciansByServiceId(this.serviceId).subscribe((data: TechnicianDTO[]) => {
        this.technicians = data;
        console.log("Technicians:", this.technicians);
      });
    });
  }

  makeAppointment(technicianId: string) {
    this.dialog.open(BookingComponent, {
      width: '700px',
          panelClass: 'custom-dialog',
          data: { technicianId },
    })
  }
}
