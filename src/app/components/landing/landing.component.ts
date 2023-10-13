import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import { CustomerRegistrationComponent } from 'src/app/customer-registration/customer-registration.component';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(public dialog: MatDialog,private customerService: CustomerService, private router: Router) {}

  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(CustomerRegistrationComponent, {
      width: '800px',
      panelClass: 'custom-dialog',
    });
  }

  // goToUserProfile() {
  //   console.log("Navigating to user profile...");
  //   const userId = this.customerService.getUserIdFromToken();
  //   if (userId) {
  //     console.log("User ID:", userId);
  //     this.router.navigate(['/myprofile']); 
  //   }
  // }
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
