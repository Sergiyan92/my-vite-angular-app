import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };
      this.http
        .post('https://connections-api.herokuapp.com/users/login', loginData)
        .subscribe(
          (res) => {
            console.log('Resp from server', res);
            this.loginForm.reset();
            this.router.navigate(['/todo']);
          },
          (error) => {
            // Обробка помилки
            alert('Ups ERROR');
            console.error('Error during registration:', error);
          }
        );
    }
  }
}
