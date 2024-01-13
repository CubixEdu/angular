import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';

export const privateGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.isAuthenticated();
};
