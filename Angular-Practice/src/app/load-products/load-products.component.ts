import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-load-products',
  templateUrl: './load-products.component.html',
  styleUrls: ['./load-products.component.css'],
})
export class LoadProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  products: any;
  // Component lifecycle hook function: ngOnInit()
  ngOnInit(): void {
    this.loadProduct();
  }
  page: number = 1;
  loadProduct() {
    this.productsService.GetProducts(this.page).subscribe((data) => {
      console.log(data.data);
      this.products = data.data;
    });
  }

  nextPage() {
    let page = this.page + 1;
    this.productsService.GetProducts(page).subscribe((data) => {
      // console.log(data.data);
      if (data.data.length != 0) {
        this.products = data.data;
        this.page = page;
      }
    });
  }

  prevPage() {
    if (this.page > 1) {
      this.productsService.GetProducts(--this.page).subscribe((data) => {
        console.log(data.data);
        if (data.data.length != 0) {
          this.products = data.data;
        }
      });
    }
  }
}
