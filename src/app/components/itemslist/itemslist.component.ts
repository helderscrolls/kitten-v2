import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.scss']
})
export class ItemslistComponent implements OnInit {
  makeupList: Array<object>;
  makeup: any;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.makeupList = this.productService.retrieveMakeupList();
  }

}

