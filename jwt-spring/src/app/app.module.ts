import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './security/component/navbar/navbar.component';
import { HomeComponent } from './security/component/home/home.component';
import { LoginComponent } from './security/component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from "@angular/forms"
import { AuthGuard } from './security/component/service/auth.guard';
import { TrackComponent } from './security/component/track/track.component';
import { SubmitClaimComponent } from './security/component/submit-claim/submit-claim.component';
import { ViewStatusComponent } from './security/component/view-status/view-status.component';
import { ViewBillComponent } from './security/component/view-bill/view-bill.component';
import { BillComponent } from './security/component/bill/bill.component';
import { GlobalErrorHandler } from './security/Error-Handling/error-handler.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    TrackComponent,
    SubmitClaimComponent,
    ViewStatusComponent,
    ViewBillComponent,
    BillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthGuard,
  {provide:ErrorHandler,useClass:GlobalErrorHandler},
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
