import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginPostDto } from '../models/dtos/login.post.dto';
import { AuthenticationModel } from '../models/authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private noxusUrl = environment.noxusUrl;

  constructor(private httpClient: HttpClient) { }

  signIn(login: LoginPostDto): Observable<AuthenticationModel> {
    return this.httpClient.post<AuthenticationModel>(`${this.noxusUrl}/authentication/login`, login);
  }

  jwtTokenExists() {
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
      return true;
    }
    else {
      return false;
    }
  }
}
