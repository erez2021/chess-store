import { TestBed } from '@angular/core/testing';

import { SetResolverResolver } from './set-resolver.service';

describe('SetResolverResolver', () => {
  let resolver: SetResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SetResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
