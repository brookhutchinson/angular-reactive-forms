// components
import { Component, OnInit }        from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { ViewChildren, ElementRef } from '@angular/core';

// forms
import { FormArray }                from '@angular/forms';
import { FormBuilder }              from '@angular/forms';
import { FormControl }              from '@angular/forms';
import { FormControlName }          from '@angular/forms';
import { FormGroup }                from '@angular/forms';
import { Validators }               from '@angular/forms';

// form validators
import { NumberValidators }         from './../../../shared/validators/number.validator';
import { GenericValidator }         from './../../../shared/validators/generic-validator';

// services
import { ActivatedRoute }           from '@angular/router';
import { HttpErrorResponse }        from '@angular/common/http';
import { Router }                   from '@angular/router';
import { ProductService }           from './../../../../services/product.service';

// interfaces
import { Product }                  from './../../../../interfaces/product';

// rxjs
import { Observable }               from 'rxjs';
import { fromEvent }                from 'rxjs';
import { merge }                    from 'rxjs';
import { Subscription }             from 'rxjs';
import { debounceTime }             from 'rxjs/operators';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  pageTitle = 'Product Edit';
  errorMessage: string;
  productForm: FormGroup;

  product: Product;
  private sub: Subscription;

  // use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  get tags(): FormArray {
    return this.productForm.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    // define validation messages for the form
    this.validationMessages = {
      productName: {
        required: 'Product name is required.',
        minlength: 'Product name must be at least three characters.',
        maxlength: 'Product name cannot exceed 50 characters.'
      },
      productCode: {
        required: 'Product code is required.'
      },
      starRating: {
        range: 'Rate the product between 1 (lowest) and 5 (highest).'
      }
    };

    // define an instance of the validator for use with this form
    // pass in the validation messages for form
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    // build root form group and populate form controls for selected product
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      productCode: ['', Validators.required],
      starRating: ['', NumberValidators.range(1, 5)],
      tags: this.fb.array([]),
      description: ''
    });

    // get product id from the route parameter
    this.sub = this.route.paramMap.subscribe(
      (params) => {
        const id = +params.get('id');
        this.getProduct(id);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    // watch for blur event from any input element on the form
    // this is required because the valueChanges does not provide notification on blur
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // merge the blur event observable with the valueChanges observable so we only need to subscribe once
    merge(this.productForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.productForm);
    });
  }

  addTag() {
    this.tags.push(new FormControl());
  }

  deleteTag(index: number) {
    this.tags.removeAt(index);
    this.tags.markAsDirty();
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      // on success
      (product: Product) => this.displayProduct(product),
      // on error
      (errorResponse: HttpErrorResponse) => this.errorMessage = errorResponse.message
    );
  }

  displayProduct(product: Product) {
    if (this.productForm) {
      this.productForm.reset();
    }

    this.product = product;

    if (this.product.id === 0) {
      // new product
      this.pageTitle = 'Add Product';
    } else {
      // existing product
      this.pageTitle = `Edit Product: ${this.product.productName}`;
    }

    // update data on form
    this.productForm.patchValue({
      productName: this.product.productName,
      productCode: this.product.productCode,
      starRating: this.product.starRating,
      description: this.product.description
    });

    this.productForm.setControl('tags', this.fb.array(this.product.tags || []));
  }

  deleteProduct(): void {
    if (this.product.id === 0) {
      // new product, do not delete, product was never saved
      this.onSaveComplete();

    } else {
      // existing product
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        this.productService.deleteProduct(this.product.id).subscribe(
          // on success
          () => this.onSaveComplete(),
          // on error
          (errorResponse: HttpErrorResponse) => this.errorMessage = errorResponse.message
        );
      }
    }
  }

  saveProduct() {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        const p = { ...this.product, ...this.productForm.value };

        if (p.id === 0) {
          // new product
          this.productService.createProduct(p).subscribe(
            // on success
            () => this.onSaveComplete(),
            // on error
            (errorResponse: HttpErrorResponse) => this.errorMessage = errorResponse.message
          );

        } else {
          // existing product
          this.productService.updateProduct(p).subscribe(
            // on success
            () => this.onSaveComplete(),
            // on error
            (errorResponse: HttpErrorResponse) => this.errorMessage = errorResponse.message
          );
        }

      } else {
        this.onSaveComplete();
      }

    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete() {
    // reset form to clear the flags
    this.productForm.reset();

    // navigate to product list component
    this.router.navigate(['/products']);
  }
}