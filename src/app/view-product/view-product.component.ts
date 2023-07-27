import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  id: number = 0; // Change `productId` to `id`
  product: any;
  groupName: string = '';

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id']; // Change `productId` to `id`
      this.getProductDetails(this.id); // Change `productId` to `id`
    });
  }

  getProductDetails(id: number): void { // Change `productId` to `id`
    this.api.getProductById(id).subscribe(
      (productData: any) => {
        this.product = productData;
      }
    );
  }
}