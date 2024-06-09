import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AdminComponent} from './pages/admin/admin.component';
import {HomeComponent} from './pages/home/home.component';
import {CategoryComponent} from './pages/category/category.component';
import {ArticleComponent} from './pages/article/article.component';
import {adminLoggedGuard} from './guards/admin-logged.guard';
import {canLoginGuard} from './guards/can-login.guard';
import {HOME, LOGIN, ADMIN, CATEGORY, ARTICLE} from './util/path-const'
import {Category} from "./classes/category";
export const routes: Routes = [
  {
    path: HOME,
    component: HomeComponent
  },
  {
    path: LOGIN,
    canActivate: [canLoginGuard],
    component: LoginComponent
  },
  {
    path: ADMIN,
    canActivate: [adminLoggedGuard],
    component: AdminComponent
  },
  {
    path: CATEGORY,
    component: CategoryComponent,
    data: {
      category: Category
    }
  },
  {
    path: ARTICLE,
    component: ArticleComponent
  }
]
