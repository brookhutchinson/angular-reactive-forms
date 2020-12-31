// services
import { Injectable }           from '@angular/core';
import { CanDeactivate }        from '@angular/router';

// components
import { ProductEditComponent } from '../../components/product-edit/product-edit.component';

// rxjs
import { Observable }           from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(component: ProductEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.productForm.dirty) {
      const productName = component.productForm.get('productName').value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${productName}?`);
    }

    return true;
  }
}
