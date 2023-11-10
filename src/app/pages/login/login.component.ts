import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginPostDto } from 'src/app/models/dtos/login.post.dto';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  momentForm!: FormGroup;

  constructor(private authService: AuthenticationService) {}

  login: LoginPostDto = {
    cpf: "",
    password: ""
  }
  onSignIn() {
    if (!this.login.cpf || !this.login.password) alert("Preencha todos os dados!");
    else {
      this.authService.signIn(this.login).subscribe((res: any) => {
        localStorage.setItem('jwtToken', res.jwtToken);
        console.log(res);
      })
    }
  }

}
