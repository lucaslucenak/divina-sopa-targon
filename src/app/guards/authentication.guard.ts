import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { JwtService } from '../services/jwt.service';

export const authenticationGuard: CanMatchFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const jwtService = inject(JwtService);
  const router = inject(Router);
  if (authenticationService.jwtTokenExists()) {
    const jwtToken = localStorage.getItem('jwtToken') || '';
    if (!jwtService.isJwtTokenExpired(jwtToken)) {
      return true;
    } else {
    router.navigate(['']);
    return false;
    }
  }
  else {
    router.navigate(['']);
    return false;
  }
};
