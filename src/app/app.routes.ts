import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { adminLoggedGuard } from './guards/admin-logged.guard';
import { canLoginGuard } from './guards/can-login.guard';
import { InitialConfigurationComponent } from './pages/initial-configuration/initial-configuration.component';
import { roleGuard } from './guards/role.guard';
import { UserRole } from './models/user-role';

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
    },
    {
        path: 'configuration',
        canActivate: [roleGuard(UserRole.superadmin)],
        component: InitialConfigurationComponent
    }
]
