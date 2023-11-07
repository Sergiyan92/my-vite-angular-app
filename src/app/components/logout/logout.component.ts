import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http
      .post('https://connections-api.herokuapp.com/users/logout', {})
      .subscribe(
        (res) => {
          console.log('Logout', res);
          this.router.navigate(['/']);
        },
        (error) => {
          alert('Ups ERROR');
          console.error('Error during registration:', error);
        }
      );
  }
}
