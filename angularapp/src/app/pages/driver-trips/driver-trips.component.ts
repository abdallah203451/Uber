import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DriverSignInComponent } from '../driver-sign-in/driver-sign-in.component';

import { Trip } from 'src/app/models/trip.model';
import { UpdatelistService } from 'src/app/services/updatelist.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-driver-trips',
  templateUrl: './driver-trips.component.html',
  styleUrls: ['./driver-trips.component.css']
})

export class DriverTripsComponent implements OnInit{
  private baseUrl:string = "https://localhost:7248/api/Trip/";
  phone:any = DriverSignInComponent.loggedInDriver;
  phone1:any = localStorage.getItem('token');
  list:Trip[]=[];
  clickEventsubscription:Subscription;
  
  constructor (private  http: HttpClient, private UpdatelistService:UpdatelistService){
    this.phone1 = localStorage.getItem('token');
    let queryParams = new HttpParams();
    queryParams = queryParams.append("phone",this.phone1);
    this.http.get(`${this.baseUrl}trips`,  {params:queryParams}).subscribe({
      next: (res) => {
        this.list = res as Trip[];
      }
    });
    this.clickEventsubscription = this.UpdatelistService.getClickEvent().subscribe(()=>{
      this.refreshList();
      })
  }

  ngOnInit() {
  }

  public refreshList(){
    this.phone1 = localStorage.getItem('token');
    let queryParams = new HttpParams();
    queryParams = queryParams.append("phone",this.phone1);
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
