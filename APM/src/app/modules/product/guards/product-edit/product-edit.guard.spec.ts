// angular modules
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

// guards
import { ProductEditGuard }              from './product-edit.guard';

describe('ProductEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ProductEditGuard ]
    });
  });

  it('should ...', inject([ProductEditGuard], (guard: ProductEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
