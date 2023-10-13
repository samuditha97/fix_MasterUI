import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service
 } from '../components/services/Models/service.module';
import { TechnicianDTO } from '../dto/technician.interface';
import { BookingDto } from '../dto/booking.interface';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://localhost:7272/api';
  private tokenKey = 'jwtToken';
  constructor(private http: HttpClient) {}

  registerCustomer(customerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/customers`, customerData);
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}/services`);
  }

  login(email: string): void {
    this.http.post<any>(`${this.apiUrl}/customers/login`, { email }).subscribe((response) => {
      localStorage.setItem(this.tokenKey, response.token);
    });
  }
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getUserProfile(token: string): Observable<any> {
    const userId = this.getUserIdFromToken();
    if (userId) {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
      const url = `${this.apiUrl}/customers/${userId}`;
      return this.http.get(url, { headers });
    }
    return new Observable();
  }
  
  getUserIdFromToken(): string | null {
    const token = this.getToken();
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const userId = tokenPayload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      console.log("User ID:", userId);
      return userId;
    }
    return null;
  }

  getTechniciansByServiceId(serviceId: string): Observable<TechnicianDTO[]> {
    const url = `${this.apiUrl}/technicians/byservice/${serviceId}`;
    return this.http.get<TechnicianDTO[]>(url);
  }
  

  getCustomerDetails(customerId: string): Observable<any> {
    const url = `${this.apiUrl}/customers/${customerId}`;
    return this.http.get(url);
  }

  submitBooking(bookingData: any): Observable<any> {
    // Use the appropriate endpoint for submitting bookings
    return this.http.post(`${this.apiUrl}/bookings`, bookingData);
  }

  getBookingsByCustomerId(customerId: string): Observable<BookingDto[]> {
    const url = `${this.apiUrl}/bookings/by-customer/${customerId}`;
    return this.http.get<BookingDto[]>(url);
  }
  
  cancelBooking(bookingId: string): Observable<any> {
    // Use the appropriate endpoint for canceling bookings
    const url = `${this.apiUrl}/bookings/${bookingId}`;
    return this.http.put(url, { isCanceled: true }); // You can pass an object with isCanceled as true to mark it as canceled
  }
  
  

}
