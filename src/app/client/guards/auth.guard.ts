import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let _AuthService = inject(AuthService)

  let islogged: boolean = !!_AuthService.getUserStatus();
  let _router = inject(Router);
  if (islogged) {
    return true;
  }
  else {
    _router.navigateByUrl('/login');
    return false;
  }
};
