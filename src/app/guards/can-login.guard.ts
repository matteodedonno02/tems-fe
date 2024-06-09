import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';

export const canLoginGuard: CanActivateFn = (route, state) => {
  const localStorageService: LocalStorageService = inject(LocalStorageService)
  const router:Router = inject(Router)

  if(localStorageService.getToken()) {
    router.navigate(['/admin'])
  }

  return true;
};
