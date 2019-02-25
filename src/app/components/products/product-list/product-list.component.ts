import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
import {ToastrService} from 'ngx-toastr';
import {MatTableDataSource} from '@angular/material';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  displayedColumns: string[] = ['productName', 'productCategory', 'actions'];
  dataSourceBooks: MatTableDataSource<Product>;

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.productList.push(x as Product);
        });

        this.dataSourceBooks = new MatTableDataSource<Product>(this.productList);

        console.log(this.dataSourceBooks);
      });
  }

  onEdit(product: Product) {
    this.productService.selectedProduct = Object.assign({}, product);
  }

  onDelete($key: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.productService.deleteProduct($key);
      this.notificationService.showSnackbar('Successful Operation: Product Deleted');
    }
  }
}
