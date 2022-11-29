import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../service/auth.service';
import { LoginResponse } from './model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  loginForm: FormGroup = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    const payload = this.loginForm.value;
    this.authService.login(payload).subscribe({
      next: (token: LoginResponse | null) => {
        if(token) this.router.navigateByUrl('todos');
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hayoo apa yang salah ??',
          })
        }
      }
    })
  }
  isFormValid(loginField: string): boolean {
    const control: AbstractControl = this.loginForm.get(loginField) as AbstractControl
    return (control) && control.invalid && (control.dirty || control.touched)
  }
}