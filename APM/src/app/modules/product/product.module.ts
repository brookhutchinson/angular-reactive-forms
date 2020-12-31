// angular modules
import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { ReactiveFormsModule }    from '@angular/forms';

// shared modules
import { SharedModule }           from '../shared/shared.module';

// imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { ProductData }            from '../../data/product-data';

// components
import { ProductListComponent }   from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent }   from './components/product-edit/product-edit.component';

// guards
import { ProductEditGuard }       from './guards/product-edit/product-edit.guard';

@NgModule({
  // modules
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'products/:id/edit', canDeactivate: [ProductEditGuard], component: ProductEditComponent }
    ])
  ],
  // components
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule {}
