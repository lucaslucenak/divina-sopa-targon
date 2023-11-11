import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPostDto } from 'src/app/models/dtos/login.post.dto';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private authService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cpf: [null],
      password: [null]
    })
  }



  onSignIn() {
    if (!this.loginForm.value.cpf || !this.loginForm.value.password) alert("Preencha todos os dados!");

    else {
      const login: LoginPostDto = {
        cpf: this.loginForm.value.cpf,
        password: this.loginForm.value.password
      }

      this.authService.signIn(login).subscribe({
        next: (res) => {
          localStorage.setItem('jwtToken', res.jwtToken);
          this.router.navigateByUrl('/delivery');
        },
        error: (error) => {
          if (error.status == 403) alert("Acesso não autorizado, confira as credenciais. HTTP Status: " + error.status);

        }
      });

    }
  }


}
