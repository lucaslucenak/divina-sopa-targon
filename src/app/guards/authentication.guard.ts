import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const jwtToken = localStorage.getItem('jwtToken');
  const router = inject(Router);

  if (jwtToken) {
    return true;
  } else {
    return false;
  }
};
