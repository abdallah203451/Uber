import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable, from} from 'rxjs';
import {NgFor, AsyncPipe, Time} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DriverTripsComponent } from '../driver-trips/driver-trips.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DriverSignInComponent } from '../driver-sign-in/driver-sign-in.component';
import { UpdatelistService } from 'src/app/services/updatelist.service';
import { RiderTripsComponent } from '../rider-trips/rider-trips.component';
import { RiderSignInComponent } from '../rider-sign-in/rider-sign-in.component';

@Component({
  selector: 'app-request-ride',
  templateUrl: './request-ride.component.html',
  styleUrls: ['./request-ride.component.css'],
})
export class RequestRideComponent implements OnInit {
  input1: string = '';
  input2: string = '';
  private baseUrl:string = "https://localhost:7248/api/Place/";
  fromList? :string[];
  toList? :string[];
  submit?: number;
  driverAccept?: number;
  arr: any;
  public static tripList:any;
  //DriverTripsComponent:DriverTripsComponent = new DriverTripsComponent(this.http, this.UpdatelistService);
  constructor (private http: HttpClient, private UpdatelistService:UpdatelistService) { 
    this.submit=0;
    this.driverAccept=0;
    this.http.get<string[]> (`${this.baseUrl}from`).subscribe(res =>{
    this.fromList = res as string[];
      }
    );
    this.http.get<string[]> (`${this.baseUrl}to`).subscribe(res =>{
      this.toList = res as string[];
        }
      );
  }

  ngOnInit() {
  }

  onSubmit() {
    var input1 = document.getElementById("from") as HTMLInputElement;
    var input2 = document.getElementById("to") as HTMLInputElement;
    var type = Number(localStorage.getItem('reqRide'));
    var riderphone:string = localStorage.getItem('token')!;

    let queryParams = new HttpParams();
    queryParams = queryParams.append("from",input1.value);
    queryParams = queryParams.append("to",input2.value);
    queryParams = queryParams.append("rideType",type);
    queryParams = queryParams.append("userPhone", riderphone);
    this.http.get<any> (`${this.baseUrl}distance`, {params:queryParams}).subscribe({
      next: (res) => {
        this.arr = res.data as any;
      }
    });
    this.UpdatelistService.sendClickEvent();
    //this.DriverTripsComponent.refreshList();
    //this.DriverTripsComponent.refreshList();
    this.submit = 1;
  }

  //Execute function on keyup
   ff() {
    var input = document.getElementById("from") as HTMLInputElement;
    input?.addEventListener("keyup",(e)=>{
    this.removeElements();
    for (let i of this.fromList!) {
      //convert input to lowercase and compare with each string
      
      if (i.toLowerCase().startsWith(this.input1.toLowerCase()) &&
      this.input1 != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.addEventListener('click',function(){
          input.value = i;
          let items = document.querySelectorAll(".list-items");
          items.forEach((item) => {
          item.remove();
        });
        });
        //Display matched part in bold
        let word = "<b>" + i.substr(0,  this.input1.length) + "</b>";
        word += i.substr( this.input1.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list")!.appendChild(listItem);
      }
    }
    });
  }
  
  displayNames(value:string) {
    this.input1 = value;
    this.removeElements();
  }
   removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }
  resetFrom(){
    var input = document.getElementById("from") as HTMLInputElement;
    input.value='';
  }

////////////////////////////////////

to() {
  var input = document.getElementById("to") as HTMLInputElement;
  input?.addEventListener("keyup",(e)=>{
  this.removeElementsTo();
  for (let i of this.toList!) {
    //convert input to lowercase and compare with each string
    
    if (i.toLowerCase().startsWith(input.value.toLowerCase()) &&
    input.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add('list-items');
      listItem.style.cursor = "pointer";
      listItem.addEventListener('click',async function onclick1(){
        input.value = i;
        let items = document.querySelectorAll(".list-items");
        items.forEach((item) => {
        item.remove();
      });
      });
      //Display matched part in bold
      let word = "<b>" + i.substr(0,  input.value.length) + "</b>";
      word += i.substr( input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list1")!.appendChild(listItem);
    }
  }
  });
}

displayNamesTo(value:string) {
  var input = document.getElementById("to") as HTMLInputElement;
  input.value = value;
  this.removeElementsTo();
}
 removeElementsTo() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
  resetTo(){
    var input = document.getElementById("to") as HTMLInputElement;
    input.value='';
  }
}