import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './security/component/home/home.component';
import { LoginComponent } from './security/component/login/login.component';
import { AuthGuard } from './security/component/service/auth.guard';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
