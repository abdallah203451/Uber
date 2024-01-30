import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBustripsComponent } from './create-bustrips.component';

describe('CreateBustripsComponent', () => {
  let component: CreateBustripsComponent;
  let fixture: ComponentFixture<CreateBustripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBustripsComponent]
    });
    fixture = TestBed.createComponent(CreateBustripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
