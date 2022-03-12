import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://www.codeboy.com:9999/admin/data/product_list.php?pno=';
  constructor(private http: HttpClient) {}

  GetProducts(page: number) {
    return this.http.get<any>(this.url + page++);
  }
}
