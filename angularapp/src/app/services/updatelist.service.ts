import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UpdatelistService{
  private subject = new Subject<any>();
  public sendClickEvent() {
    this.subject.next(1);
  }
  public getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
}