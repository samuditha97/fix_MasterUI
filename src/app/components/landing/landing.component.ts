import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerRegistrationComponent } from 'src/app/customer-registration/customer-registration.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(public dialog: MatDialog) {}

  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(CustomerRegistrationComponent, {
      width: '800px',
      panelClass: 'custom-dialog',
    });
  }

  
}
