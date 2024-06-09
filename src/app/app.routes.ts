import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { adminLoggedGuard } from './guards/admin-logged.guard';
import { canLoginGuard } from './guards/can-login.guard';

export const routes: Routes = [
    {
        path: 'login',
        canActivate: [canLoginGuard],
        component: LoginComponent
    },
    {
        path: 'admin',
        canActivate: [adminLoggedGuard],
        component: AdminComponent
    }
]
