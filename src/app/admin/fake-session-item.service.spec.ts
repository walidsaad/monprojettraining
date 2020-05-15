import { TestBed } from '@angular/core/testing';

import { FakeSessionItemService } from './fake-session-item.service';

describe('FakeSessionItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeSessionItemService = TestBed.get(FakeSessionItemService);
    expect(service).toBeTruthy();
  });
});
