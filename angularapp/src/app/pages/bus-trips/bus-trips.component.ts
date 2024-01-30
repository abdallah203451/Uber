import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DriverSignInComponent } from '../driver-sign-in/driver-sign-in.component';
import { RequestRideComponent } from '../request-ride/request-ride.component';
import { BusTrip } from 'src/app/models/bustrip.model';
@Component({
  selector: 'app-bus-trips',
  templateUrl: './bus-trips.component.html',
  styleUrls: ['./bus-trips.component.css']
})
export class BusTripsComponent {
  private baseUrl:string = "https://localhost:7248/api/BusTrip/";
  d: Date = new Date(); 
  isDriver:number = DriverSignInComponent.driverOrRider;
  flag:any = localStorage.getItem('isdriver');
  x:BusTrip = {id:1,from:"Cairo",to:"Giza",distance:13.6,price:56.4,date:this.d ,numOfReservation:5};
  list:any[]=[];

  constructor (private  http: HttpClient){
    this.flag = localStorage.getItem('isdriver');
    this.http.get(`${this.baseUrl}allBusTrips`).subscribe({
      next: (res) => {
        this.list = res as any[];
      }
    });
    // for(let x of this.list){
    //     x.date;
    // }
    //this.isDriver = DriverSignInComponent.driverOrRider;
  }
  ngOnInit(){
  }

  getTicket(id:any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    this.http.put(`${this.baseUrl}UpdateReservationNum`,id).subscribe();
    this.http.get(`${this.baseUrl}allBusTrips`).subscribe({
      next: (res) => {
        this.list = res as any[];
      }
    });
   // this.isDriver = DriverSignInComponent.driverOrRider;
  }
}
