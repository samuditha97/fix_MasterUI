import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  user: any = {};

  constructor(private customerService: CustomerService, private dialogRef: MatDialog) {}

  ngOnInit(): void {
    // Fetch user ID from the token
    const userId = this.customerService.getUserIdFromToken();

    if (userId) {
      // Fetch user profile data
      this.customerService.getUserProfile(userId).subscribe((data) => {
        this.user = data;
        console.log(data);
      });
    }
  }

  editUserProfile() {

  }

  deleteUserProfile() {
 
  }
}
