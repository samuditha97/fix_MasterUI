import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent {
  email: string | undefined;

  constructor(private dialogRef: MatDialogRef<LoginPopupComponent>, private customerService: CustomerService ) { }

  onLogin() {
    if (this.email) {
      // Call the login method of the AuthService to log in the user.
      this.customerService.login(this.email);
      // Close the login popup.
      this.dialogRef.close();
    }
  }
}
