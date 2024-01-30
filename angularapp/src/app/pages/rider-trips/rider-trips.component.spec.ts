import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderTripsComponent } from './rider-trips.component';

describe('RiderTripsComponent', () => {
  let component: RiderTripsComponent;
  let fixture: ComponentFixture<RiderTripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiderTripsComponent]
    });
    fixture = TestBed.createComponent(RiderTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
