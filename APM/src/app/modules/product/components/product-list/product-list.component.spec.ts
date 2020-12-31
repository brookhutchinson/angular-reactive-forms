// modules
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule }   from '@angular/common/http/testing';

// components
import { ProductListComponent }      from './product-list.component';

// services
import { HttpTestingController }      from '@angular/common/http/testing';
import { ProductService }             from './../../../../services/product.service';

// interfaces
import { Product }                    from './../../../../interfaces/product';

// schemas
import { NO_ERRORS_SCHEMA }           from '@angular/core';

describe('ProductListComponent', () => {
  // component
  let productListComponent: ProductListComponent;

  // fixture
  let fixture: ComponentFixture<ProductListComponent>;

  // services
  let productService: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // modules
      imports: [
        // angular modules
        HttpClientTestingModule,
      ],
      // components
      declarations: [ ProductListComponent ],
      // services
      providers: [ ProductService ],
      // schemas
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    // create instance of component fixture
    fixture = TestBed.createComponent(ProductListComponent);

    // create instance of component
    productListComponent = fixture.componentInstance;

    // run change detection
    fixture.detectChanges();

    // create instance of each service
    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be named ProductListComponent', () => {
    expect(ProductListComponent.name).toBe('ProductListComponent');
  });

  it('should be named ProductService', () => {
    expect(ProductService.name).toBe('ProductService');
  });

  it('should create ProductListComponent', () => {
    expect(productListComponent).toBeTruthy();
  });

  it('should create ProductService', () => {
    expect(productService).toBeTruthy();
  });
});
