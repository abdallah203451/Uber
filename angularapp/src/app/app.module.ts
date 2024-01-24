import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { DriverOrRiderComponent } from './pages/driver-or-rider/driver-or-rider.component';
import { DriverSignInComponent } from './pages/driver-sign-in/driver-sign-in.component';
import { RiderSignInComponent } from './pages/rider-sign-in/rider-sign-in.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestRideComponent } from './pages/request-ride/request-ride.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgFor, AsyncPipe} from '@angular/common';
import { DriverTripsComponent } from './pages/driver-trips/driver-trips.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DriverOrRiderComponent,
    DriverSignInComponent,
    RiderSignInComponent,
    NavBarComponent,
    RequestRideComponent,
    DriverTripsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule, FormsModule, ReactiveFormsModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule,NgFor,AsyncPipe,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'driver-or-rider', component: DriverOrRiderComponent},
      {path: 'rider-sign-in', component: RiderSignInComponent},
      {path: 'driver-sign-in', component: DriverSignInComponent},
      {path: 'driver-trips', component: DriverTripsComponent},
      {path: 'request-ride', component: RequestRideComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
