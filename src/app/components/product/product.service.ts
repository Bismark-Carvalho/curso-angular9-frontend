import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3001/products"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'Fechar', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"

    })
  }

  create (product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product)
  }

  read (): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL)
  }

}
