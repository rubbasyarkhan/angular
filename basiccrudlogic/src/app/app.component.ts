import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basiccrudlogic';
  products: any[] = [];
  currentProduct: any; // Hold the current product to edit

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  // Create Product
  onProductCreate(form: NgForm) {
    this.http
      .post(
        'https://b2rykcrud-default-rtdb.asia-southeast1.firebasedatabase.app/products.json',
        form.value
      )
      .subscribe(
        (res) => {
          console.log('Product Created:', res); // Log the created product response
          this.fetchProducts(); // Fetch updated products
          form.reset(); // Reset the form after successful addition
        },
        (error) => {
          console.error('Error creating product:', error); // Log error if any
        }
      );
  }

  // Fetch Products
  fetchProducts() {
    this.http
      .get<{ [key: string]: any }>(
        'https://b2rykcrud-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
      )
      .subscribe(
        (res) => {
          console.log('Fetched Products:', res); // Log the fetched products
          const productsArray: any[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              productsArray.push({ id: key, ...res[key] });
            }
          }
          this.products = productsArray; // Assign to products
          console.log('Processed Products:', this.products); // Log processed products
        },
        (error) => {
          console.error('Error fetching products:', error); // Log error if any
        }
      );
  }

  // Open Edit Modal
  openEditModal(product: any) {
    this.currentProduct = product; // Set the current product to edit
    const modal = new window.bootstrap.Modal(
      document.getElementById('editProductModal')
    );
    modal.show(); // Show the modal
  }

  // Edit Product
  onProductEdit(
    productId: string,
    updatedProduct: { Pname: string; desc: string; price: string }
  ) {
    this.http
      .put(
        `https://b2rykcrud-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json`,
        updatedProduct
      )
      .subscribe((res) => {
        console.log('Product Updated:', res);
        this.fetchProducts();
      });
  }

  // Delete Product
  onProductDelete(productId: string) {
    this.http
      .delete(
        `https://b2rykcrud-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json`
      )
      .subscribe((res) => {
        console.log('Product Deleted:', res);
        this.fetchProducts();
      });
  }
}
