import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-products',
  // selector: 'router-outlet',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [];

  vijay !: number;
  selectedProduct: Product = { id : 0 , name: '', price: 0}

  constructor(private apiService: ApiService) {
    this.apiService.readProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);

      this.vijay =0;

    });
  }

  createOrUpdateProduct(form: { value: Product }) {

    this.vijay = 0;

    form.value.id = this.selectedProduct.id;
    form.value.name = this.selectedProduct.name;
    form.value.price = this.selectedProduct.price;
    if (this.selectedProduct && this.selectedProduct.id) {
      this.apiService
        .updateProduct(form.value)
        .subscribe((product: Product) => {
          console.log('Product updated', product);
          this.apiService.readProducts().subscribe((products: Product[]) => {
            this.products = products;
          });
        });
    } else {
      this.apiService
        .createProduct(form.value)
        .subscribe((product: Product) => {
          console.log('Product created, ', product);
          this.apiService.readProducts().subscribe((products: Product[]) => {
            this.products = products;
          });
        });
    }
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(id: number) {
    this.apiService.deleteProduct(id).subscribe((product: Product) => {
      console.log('Product deleted, ', product);
      this.apiService.readProducts().subscribe((products: Product[]) => {
        this.products = products;
      });
    });
  }
}
