import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { DriverSignInComponent } from '../driver-sign-in/driver-sign-in.component';
import { RequestRideComponent } from '../request-ride/request-ride.component';
import { Trip } from 'src/app/models/trip.model';
@Component({
  selector: 'app-driver-trips',
  templateUrl: './driver-trips.component.html',
  styleUrls: ['./driver-trips.component.css']
})
export class DriverTripsComponent {
  private baseUrl:string = "https://localhost:7248/api/Trip/";
  phone:any = DriverSignInComponent.loggedInDriver;
  list:Trip[]=[];

  constructor (private  http: HttpClient){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("phone",this.phone);
    this.http.get(`${this.baseUrl}trips`,  {params:queryParams}).subscribe({
      next: (res) => {
        this.list = res as Trip[];
      }
    });
  }

  refreshList(){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("phone",this.phone);
    this.http.get(`${this.baseUrl}trips`,  {params:queryParams}).subscribe({
      next: (res) => {
        this.list = res as Trip[];
      }
    });
  }

  accept(id:number){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    queryParams = queryParams.append("cond",0);
    this.http.delete(`${this.baseUrl}remove`,{params:queryParams}).subscribe({
      next: (res) => {
            this.refreshList();
      }
    });
  }

  cancel(id:number){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    queryParams = queryParams.append("cond",1);
    this.http.delete(`${this.baseUrl}remove`,{params:queryParams}).subscribe({
      next: (res) => {
        this.refreshList();
      }
    });
  }

}
