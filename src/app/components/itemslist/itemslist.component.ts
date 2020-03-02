import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.scss']
})
export class ItemslistComponent implements OnInit {
  dogList: Array<object>;
  dog: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.dogList = this.productService.retrieveDogList();
  }
}
