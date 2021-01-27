// modules
import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { Routes }                 from '@angular/router';

// components
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent }   from './components/product-edit/product-edit.component';
import { ProductListComponent }   from './components/product-list/product-list.component';

// guards
import { ProductEditGuard }       from './guards/product-edit/product-edit.guard';

// define routes
const routes: Routes = [
  // product list route
  { path: '', component: ProductListComponent },
  // product detail route
  { path: ':id', component: ProductDetailComponent },
  // product edit route
  { path: ':id/edit', canDeactivate: [ProductEditGuard], component: ProductEditComponent }
];

@NgModule({
  // imports
  imports: [ RouterModule.forChild(routes) ],
  // exports
  exports: [ RouterModule ]
})
export class ProductRoutingModule {}