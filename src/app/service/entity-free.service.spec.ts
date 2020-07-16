import { TestBed } from '@angular/core/testing';

import { EntityFreeService } from './entity-free.service';

describe('EntityFreeService', () => {
  let service: EntityFreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityFreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
