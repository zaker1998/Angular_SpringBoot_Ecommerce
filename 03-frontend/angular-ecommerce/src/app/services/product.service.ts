import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'; // 'http://localhost:8080/api/products&size=100'                                     
  constructor(private httpClient: HttpClient) { }         // SPRING REST ONLY SHOWS 20 PRODUCTS use size to change

  getProductList(theCategoryId: number): Observable<Product[]> {
    //need to build Url based on category id
    
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
    return this.httpClient.get<GetResponse>(searchUrl).pipe
    (map(response => response._embedded.products)
  );
  }
}


interface GetResponse {
  _embedded: {
    products: Product[];
  }
}