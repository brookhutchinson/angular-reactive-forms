// angular modules
import { TestBed }          from '@angular/core/testing';

// guards
import { ProductEditGuard } from './product-edit.guard';

describe('ProductEditGuard', () => {
  let guard: ProductEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductEditGuard);
  });

  it('should create ProductEditGuard', () => {
    expect(guard).toBeTruthy();
  });
});
