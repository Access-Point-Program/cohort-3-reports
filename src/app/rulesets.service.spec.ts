import { TestBed } from '@angular/core/testing';

import { RulesetService } from './rulesets.service';

describe('RulesetService', () => {
  let service: RulesetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
