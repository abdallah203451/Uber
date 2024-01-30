import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DriverSignInComponent } from 'src/app/pages/driver-sign-in/driver-sign-in.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
   isDriver:number = DriverSignInComponent.driverOrRider;
   isDriver1:string = localStorage.getItem('isdriver')!;
   constructor(private router: Router) {}
   riderOrDriber(){
    this.isDriver1 = localStorage.getItem('isdriver')!;
    if(this.isDriver1=='1'){
      this.router.navigate(['/driver-trips']);
    }
    else{
      this.router.navigate(['/rider-trips']);
    }
   }
}
