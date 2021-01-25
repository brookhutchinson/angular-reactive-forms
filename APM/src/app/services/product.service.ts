// services
import { Injectable }        from '@angular/core';
import { HttpClient }        from '@angular/common/http';
import { HttpHeaders }       from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

// rxjs
import { Observable }        from 'rxjs';
import { of }                from 'rxjs';
import { throwError }        from 'rxjs';
import { catchError }        from 'rxjs/operators';
import { map }               from 'rxjs/operators';
import { tap }               from 'rxjs/operators';

// interfaces
import { Product }           from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) {}

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    product.id = null;

    return this.http.post<Product>(this.productsUrl, product, { headers: headers })
      .pipe(
        // write to console
        tap(product => console.log('createProduct(): ' + JSON.stringify(product))),
        // catch error
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, { headers: headers })
      .pipe(
        // write to console
        tap(product => console.log('deleteProduct(): ' + id)),
        // catch error
        catchError(this.handleError)
      );
  }

  getProduct(id: number): Observable<Product> {
    const url: string = `${this.productsUrl}/${id}`;

    if (id === 0) {
      // new product
      return of(this.initializeProduct())
        .pipe(
          // write to console
          tap((product) => console.table(product)),
          // catch error
          catchError(this.handleError)
        );

    } else {
      // edit product
      return this.http.get<Product>(url)
        .pipe(
          // write to console
          tap((product) => console.table(product)),
          // catch error
          catchError(this.handleError)
        );
    }
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        // write to console
        tap((products) => console.table(products)),
        // catch error
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${product.id}`;

    return this.http.put<Product>(url, product, { headers: headers })
      .pipe(
        // write to console
        tap(() => console.log('updateProduct(): ' + product.id)),
        // return the product on an update
        map(() => product),
        // catch error
        catchError(this.handleError)
      );
  }

  handleError(errorObject: HttpErrorResponse) {
    let errorMessage: string = '';

    if (errorObject.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Client-Side Error occurred: ${errorObject.error.message}`;
    } else {
      // server-side error
      errorMessage = `Server-Side Error occurred: Http Response Code ${errorObject.status}, error message: ${errorObject.message}`;
    }

    // log to console
    console.error(errorMessage);

    // throw error
    return throwError(errorMessage);
  }

  private initializeProduct(): Product {
    // return an initialized product object
    return {
      id: 0,
      productName: null,
      productCode: null,
      tags: [''],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }
}
