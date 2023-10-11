import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://localhost:7272/api/customers';
  
  constructor(private http: HttpClient) {}
  
  registerCustomer(customerData: any): Observable<any> {
    return this.http.post(this.apiUrl, customerData);
  }
}
