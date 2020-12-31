// component
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed }                 from '@angular/core/testing';
import { ProductService }          from './product.service';

// services
import { HttpErrorResponse }       from '@angular/common/http';
import { HttpTestingController }   from '@angular/common/http/testing';

describe('ProductService', () => {
  // services
  let productService: ProductService;
  let httpMock: HttpTestingController;

  beforeEach( () => {
    TestBed.configureTestingModule({
      // modules
      imports: [ HttpClientTestingModule ],
      // services
      providers: [ ProductService ]
    });

    // create instance of each service
    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be named ProductService', () => {
    expect(ProductService.name).toBe('ProductService');
  });

  it('should be named HttpTestingController', () => {
    expect(HttpTestingController.name).toBe('HttpTestingController');
  });

  it('should create instance of ProductService', () => {
    expect(productService).toBeTruthy();
  });

  it('should create instance of HttpTestingController', () => {
    expect(httpMock).toBeTruthy();
  });
});
