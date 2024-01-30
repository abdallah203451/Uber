import { Component } from '@angular/core';
import { DriverSignInComponent } from '../driver-sign-in/driver-sign-in.component';
import { Trip } from 'src/app/models/trip.model';
import { Subscription } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RiderSignInComponent } from '../rider-sign-in/rider-sign-in.component';

@Component({
  selector: 'app-rider-trips',
  templateUrl: './rider-trips.component.html',
  styleUrls: ['./rider-trips.component.css']
})
export class RiderTripsComponent {
  private baseUrl:string = "https://localhost:7248/api/Trip/";
  phone:any = RiderSignInComponent.loggedInRider;
  phone1:any = localStorage.getItem('token');
  list:Trip[]=[];
  
  constructor (private  http: HttpClient){
    this.phone1 = localStorage.getItem('token');
    let queryParams = new HttpParams();
    queryParams = queryParams.append("phone",this.phone1);
    this.http.get(`${this.baseUrl}userTrips`,  {params:queryParams}).subscribe({
      next: (res) => {
        this.list = res as Trip[];
      }
    });
  }

  ngOnInit() {
  }

  public refreshList(){
    this.phone1 = localStorage.getItem('token');
    let queryParams = new HttpParams();
    queryParams = queryParams.append("phone",this.phone1);
    this.http.get(`${this.baseUrl}userTrips`,  {params:queryParams}).subscribe({
      next: (res) => {
        this.list = res as Trip[];
      }
    });
  }

}
