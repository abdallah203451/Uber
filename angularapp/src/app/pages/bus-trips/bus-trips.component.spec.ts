import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTripsComponent } from './bus-trips.component';

describe('BusTripsComponent', () => {
  let component: BusTripsComponent;
  let fixture: ComponentFixture<BusTripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusTripsComponent]
    });
    fixture = TestBed.createComponent(BusTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
