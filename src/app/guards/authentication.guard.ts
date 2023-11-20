import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authenticationGuard: CanMatchFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  if (!authenticationService.jwtTokenExists()) {
    router.navigate(['']);
    return false;
  }
  else {
    return true;
  }
};
