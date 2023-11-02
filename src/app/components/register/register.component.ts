import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const registrationData = {
        name: this.registrationForm.get('name')?.value,
        email: this.registrationForm.get('email')?.value,
        password: this.registrationForm.get('password')?.value,
      };

      this.http
        .post<any>(
          'https://connections-api.herokuapp.com/users/signup',
          registrationData
        )
        .subscribe(
          (response) => {
            // Обробка успішної відповіді
            console.log('Response from server:', response);
            // Очищення форми
            this.registrationForm.reset();
          },
          (error) => {
            // Обробка помилки
            console.error('Error during registration:', error);
          }
        );
    }
  }
}
