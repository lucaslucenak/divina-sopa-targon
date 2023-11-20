import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private jwtHelper: JwtHelperService) { }

  getDecodedJwtToken(jwtToken: string): any {
    return this.jwtHelper.decodeToken(jwtToken);
  }

  isJwtTokenExpired(jwtToken: string): boolean {
    return this.jwtHelper.isTokenExpired(jwtToken);
  }

  getJwtTokenRole(jwtToken: string): string {
    const decodedToken = this.getDecodedJwtToken(jwtToken);
    return decodedToken.role;
  }
}
