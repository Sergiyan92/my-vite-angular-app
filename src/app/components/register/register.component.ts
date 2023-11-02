import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      // Отримайте значення полів email та password з форми
      const emailValue = this.registrationForm.get('email')?.value;
      const passwordValue = this.registrationForm.get('password')?.value;

      // Виведіть значення в консоль
      console.log('Email:', emailValue);
      console.log('Password:', passwordValue);
      this.registrationForm.reset();
      // Відправка даних на сервер для створення нового користувача
      // Ви можете використовувати Angular HttpClient для виконання HTTP-запитів на сервер.
      // Наприклад:
      // this.http.post('/api/register', this.registrationForm.value).subscribe(response => {
      // });
    }
  }
}
