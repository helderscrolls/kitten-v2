import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.scss']
})
export class ItemslistComponent implements OnInit {
  makeupList: Observable<any[]>;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.makeupList = this.productService.retrieveMakeupList();
  }

}

