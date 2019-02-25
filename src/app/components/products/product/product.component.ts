import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {NgForm} from '@angular/forms';
import {Product} from '../../../models/product';
import {ToastrService} from 'ngx-toastr';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    public productService: ProductService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null)
      this.productService.insertProduct(productForm.value);
    else
      this.productService.updateProduct(productForm.value);

    this.resetForm(productForm);
    this.notificationService.showSnackbar('Successful Operation');
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
      this.productService.selectedProduct = new Product();
    }
  }
}
