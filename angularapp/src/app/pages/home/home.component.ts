import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  text: string = "";
  constructor(){}
  ngOnInit(): void {}
  rideType(id:any){
    localStorage.setItem('reqRide', id); 
  }
}
