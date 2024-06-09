import { CanActivateFn } from '@angular/router';
import { UserRole } from '../models/user-role';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';

export function roleGuard(role:UserRole): CanActivateFn {
  return () => {
    const localStorageService: LocalStorageService = inject(LocalStorageService)
    return localStorageService.getRole() === role
  }
}
