import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';
import { of }         from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map }        from 'rxjs/operators';
import { tap }        from 'rxjs/operators';

// interfaces
import { Product }    from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        // write to console
        tap(data => console.log(JSON.stringify(data))),
        // catch error
        catchError(this.handleError)
      );
  }

  getProduct(id: number): Observable<Product> {
    if (id === 0) {
      return of(this.initializeProduct());
    }

    const url = `${this.productsUrl}/${id}`;

    return this.http.get<Product>(url)
      .pipe(
        // write to console
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        // catch error
        catchError(this.handleError)
      );
  }

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    product.id = null;

    return this.http.post<Product>(this.productsUrl, product, { headers })
      .pipe(
        // write to console
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        // catch error
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, { headers })
      .pipe(
        // write to console
        tap(data => console.log('deleteProduct: ' + id)),
        // catch error
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${product.id}`;

    return this.http.put<Product>(url, product, { headers })
      .pipe(
        // write to console
        tap(() => console.log('updateProduct: ' + product.id)),
        // return the product on an update
        map(() => product),
        // catch error
        catchError(this.handleError)
      );
  }

  private handleError(err): Observable<never> {
    let errorMessage: string;

    if (err.error instanceof ErrorEvent) {
      // a client-side or network error occurred. Handle it accordingly
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // the backend returned an unsuccessful response code
      // the response body may contain clues as to what went wrong
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeProduct(): Product {
    // return an initialized object
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
