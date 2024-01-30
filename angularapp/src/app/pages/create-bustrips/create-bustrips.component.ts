import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusTrip } from 'src/app/models/bustrip.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-create-bustrips',
  templateUrl: './create-bustrips.component.html',
  styleUrls: ['./create-bustrips.component.css']
})
export class CreateBustripsComponent {
  //input1: string = '';
  //input2: string = '';
  private baseUrl1:string = "https://localhost:7248/api/Place/";
  fromList? :string[];
  toList? :string[];
  submit?: number;
  driverAccept?: number;
  arr: any;
  public static tripList:any;
  public datepipe!: DatePipe;

  private baseUrl:string = "https://localhost:7248/api/BusTrip/";
  createBusTripForm!: FormGroup;
  busTrip:BusTrip={
    id: 0,
    from: '',
    to: '',
    distance: 0,
    price: 0,
    date: new Date(),
    numOfReservation: 0
  };
  public dateTimeForm!: FormGroup;
  public date1 = new Date(2024,1, 1, 0, 0, 0);
  public minDate = new Date(this.date1.getFullYear(), this.date1.getMonth(), this.date1.getDate() - 10);
  public maxDate = new Date(this.date1.getFullYear(), this.date1.getMonth(), this.date1.getDate() + 15);
  public minTime = '00:00:00';
  public maxTime = '23:59:59';
  constructor(private fb: FormBuilder, private  http: HttpClient, private router: Router) {
    this.submit=0;
    this.driverAccept=0;
    this.http.get<string[]> (`${this.baseUrl1}from`).subscribe(res =>{
    this.fromList = res as string[];
      }
    );
    this.http.get<string[]> (`${this.baseUrl1}to`).subscribe(res =>{
      this.toList = res as string[];
        }
      );
  }

  ngOnInit(): void {
    (this.createBusTripForm = new FormGroup({
      from: new FormControl(this.busTrip.from, [
        Validators.required,
      ]),
      to: new FormControl(this.busTrip.to, [
        Validators.required,
      ]),
      price: new FormControl(this.busTrip.price, [
        Validators.required,
      ]),
      date: new FormControl(this.busTrip.date, [
        Validators.required,
      ]),
      startDate: new FormControl(this.busTrip.date, [
        Validators.required,
      ]),
    }));
    this.dateTimeForm = this.fb.group({
      date1: [this.date, Validators.required],
      time: [this.date, Validators.required]
  });
  }

  get from() {
    return this.createBusTripForm.get('from');
  }
  get to() {
    return this.createBusTripForm.get('to');
  }
  get price() {
    return this.createBusTripForm.get('price');
  }
  get date() {
    return this.createBusTripForm.get('date');
  }
  get startDate() {
    return this.createBusTripForm.get('startDate');
  }
  get endDate() {
    return this.createBusTripForm.get('endDate');
  }

  onSubmit() {
    if (this.createBusTripForm.valid) {
      // perform logic for signup
      var input1 = document.getElementById("from") as HTMLInputElement;
      var input2 = document.getElementById("to") as HTMLInputElement;

      const obj = {
        Id: 0,
        From: input1.value,
        To: input2.value,
        Distance:11,
        Price: this.busTrip.price,
        Date: this.busTrip.date,
        NumOfReservation:0
      };

      obj.Date.setHours(obj.Date.getHours()+2);
      this.http.post<any> (`${this.baseUrl}Create`, obj).subscribe({
        next: (res) => {
          alert(res.message);
          this.router.navigate(['/bus-trips'])
        },
        error: (err) => {
          alert(err?.error.message);
        },
      });
      console.log(this.createBusTripForm.value);
    }
  }

///////////////////////////////////////////////////////////////////

ff() {
  var input = document.getElementById("from") as HTMLInputElement;
  input?.addEventListener("keyup",(e)=>{
  this.removeElements();
  for (let i of this.fromList!) {
    //convert input to lowercase and compare with each string
    
    if (i.toLowerCase().startsWith(this.busTrip.from.toLowerCase()) &&
    this.busTrip.from != ""
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
      let word = "<b>" + i.substr(0,  this.busTrip.from.length) + "</b>";
      word += i.substr( this.busTrip.from.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list")!.appendChild(listItem);
    }
  }
  });
}

displayNames(value:string) {
  this.busTrip.from = value;
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

to1() {
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
