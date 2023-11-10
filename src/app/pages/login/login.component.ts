import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
export class LoginComponent {

  momentForm!: FormGroup;

  constructor(private authService: AuthenticationService, private router: Router) {}

  login: LoginPostDto = {
    cpf: "",
    password: ""
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      alert('Erro do lado do cliente: ' + error.error.message)
    }
    if (error.status == 403) {
      alert("Acesso não autorizado, confira as credenciais. Status: " + error.status);
    }
  }
  onSignIn() {
    if (!this.login.cpf || !this.login.password) alert("Preencha todos os dados!");
    
    else {
      this.authService.signIn(this.login).subscribe((res: any) => {
        localStorage.setItem('jwtToken', res.jwtToken);
        this.router.navigate(['delivery'])
      },
      error => {
        if (error.status == 403) alert("Acesso não autorizado, confira as credenciais. HTTP Status: " + error.status);
      }
      
      )
    }
  }


}
