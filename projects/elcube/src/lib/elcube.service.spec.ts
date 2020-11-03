import { TestBed } from '@angular/core/testing';

import { ElcubeService } from './elcube.service';

describe('ElcubeService', () => {
  let service: ElcubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElcubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
