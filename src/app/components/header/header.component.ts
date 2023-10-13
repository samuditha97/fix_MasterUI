import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import { CustomerRegistrationComponent } from 'src/app/customer-registration/customer-registration.component';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog,private customerService: CustomerService, private router: Router) {}
  
  goToUserProfile() {
    const userId = this.customerService.getUserIdFromToken();
    if (userId) {
      // Fetch user profile data and open the dialog
      this.customerService.getUserProfile(userId).subscribe((data) => {
        const dialogRef = this.dialog.open(CustomerComponent, {
          width: '500px',
          data: data, 
          panelClass: 'custom-dialog',
        });
      });
    }
  }
}

