import { TestBed } from '@angular/core/testing';

import { BindBehaviourService } from './bind-behaviour.service';

describe('BindBehaviourService', () => {
  let service: BindBehaviourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BindBehaviourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
