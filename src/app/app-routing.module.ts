import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AdminPageComponent } from './views/admin-page/admin-page.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
