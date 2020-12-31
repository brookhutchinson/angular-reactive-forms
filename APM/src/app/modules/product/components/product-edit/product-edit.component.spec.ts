// modules
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule }   from '@angular/common/http/testing';

// components
import { ProductEditComponent }      from './product-edit.component';

// schemas
import { NO_ERRORS_SCHEMA }          from '@angular/core';

xdescribe('ProductEditComponent', () => {
  // component
  let productEditComponent: ProductEditComponent;

  // fixture
  let fixture: ComponentFixture<ProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // modules
      imports: [
        // angular modules
        HttpClientTestingModule,
      ],
      // components
      declarations: [ ProductEditComponent ],
      // services
      providers: [],
      // schemas
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    // create instance of component fixture
    fixture = TestBed.createComponent(ProductEditComponent);

    // create instance of component
    productEditComponent = fixture.componentInstance;

    // run change detection
    fixture.detectChanges();
  });

  it('should be named ProductEditComponent', () => {
    expect(ProductEditComponent.name).toBe('ProductEditComponent');
  });

  it('should create ProductEditComponent', () => {
    expect(productEditComponent).toBeTruthy();
  });
});
