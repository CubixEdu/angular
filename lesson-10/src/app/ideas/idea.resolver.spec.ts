import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { ideaResolver } from './idea.resolver';

describe('ideaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => ideaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
