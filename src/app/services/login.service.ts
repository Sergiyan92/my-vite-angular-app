import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  setAuthHeader(token: string) {
    localStorage.setItem('token', token);
  }

  clearAuthHeader() {
    localStorage.removeItem('token');
  }

  login(email: string, password: string) {
    return this.http.post<any>(
      'https://connections-api.herokuapp.com/users/login',
      {
        email,
        password,
      }
    );
  }
}
