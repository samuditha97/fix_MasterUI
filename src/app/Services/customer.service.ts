import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service
 } from '../components/services/Models/service.module';
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
      return tokenPayload.name;
    }
    return null;
  }
}
