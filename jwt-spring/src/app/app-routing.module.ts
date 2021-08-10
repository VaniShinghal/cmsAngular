import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './security/component/bill/bill.component';
import { HomeComponent } from './security/component/home/home.component';
import { LoginComponent } from './security/component/login/login.component';
import { AuthGuard } from './security/component/service/auth.guard';
import { SubmitClaimComponent } from './security/component/submit-claim/submit-claim.component';
import { TrackComponent } from './security/component/track/track.component';
import { ViewBillComponent } from './security/component/view-bill/view-bill.component';
import { ViewStatusComponent } from './security/component/view-status/view-status.component';

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
  {
    path:"logout",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"track",
    component:TrackComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {
    path:"submit",
    component:SubmitClaimComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {
    path:"status",
    component:ViewStatusComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {
    path:"viewbill",
    component:ViewBillComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  },
  {
    path:"bill",
    component:BillComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
