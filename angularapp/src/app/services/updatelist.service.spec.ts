import { TestBed } from '@angular/core/testing';

import { UpdatelistService } from './updatelist.service';

describe('UpdatelistService', () => {
  let service: UpdatelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
