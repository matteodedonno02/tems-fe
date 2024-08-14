import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { adminLoggedGuard } from './guards/admin-logged.guard';
import { canLoginGuard } from './guards/can-login.guard';
import { InitialConfigurationComponent } from './pages/initial-configuration/initial-configuration.component';
import { roleGuard } from './guards/role.guard';
import { UserRole } from './models/user-role';
import { CategoriesComponent } from './pages/admin/admin-pages/categories/categories.component';
import { AddCategoryComponent } from "./pages/admin/admin-pages/add-category/add-category.component";
import { EditCategoriesComponent } from './pages/admin/admin-pages/edit-categories/edit-categories.component';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [canLoginGuard],
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [adminLoggedGuard],
    component: AdminComponent,
    children: [{
      path: 'categories',
      component: CategoriesComponent,
    }, {
      path: 'addCategory',
      component: AddCategoryComponent
    }, {
      path: 'editCategory',
      component: EditCategoriesComponent
    }]
  },
  {
    path: 'configuration',
    canActivate: [roleGuard(UserRole.superadmin)],
    component: InitialConfigurationComponent
  }
]
