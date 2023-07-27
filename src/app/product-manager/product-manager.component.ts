import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { products } from 'src/model/products';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products: any = [];
  searchTerm: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe((data: products) => {
      console.log(data);
      // Assuming the API response has a 'products' property containing the array of products
      this.products = data.products;
    });
  }

  search(event: any): void {
    this.searchTerm = event.target.value.trim().toLowerCase();
  }
}
