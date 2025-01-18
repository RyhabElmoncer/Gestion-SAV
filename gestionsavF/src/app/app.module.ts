import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import { DashboardResponsableComponent } from './components/dashboard-responsable/dashboard-responsable.component';
import { DashboardTechnicienComponent } from './components/dashboard-technicien/dashboard-technicien.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardClientComponent,
    DashboardResponsableComponent,
    DashboardTechnicienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Ajoutez FormsModule ici pour [(ngModel)]
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
