import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'
import { LocalStorageService } from '../services/local-storage.service';
import {LOGIN} from "../util/path-const";

export const adminLoggedGuard: CanActivateFn = (route, state) => {
  const localStorageService: LocalStorageService = inject(LocalStorageService)
  const router: Router = inject(Router)

  if(!localStorageService.getToken()) {
    router.navigate([`/${LOGIN}`])
  }

  return !!localStorageService.getToken();
};
