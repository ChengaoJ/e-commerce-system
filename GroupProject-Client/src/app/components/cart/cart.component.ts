import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item.service";
import {MatTableDataSource, MatSort} from '@angular/material';
import {Item} from "../../models/item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[] = [];

  displayedColumns = ['productName', 'description', 'price', 'action'];
  dataSource: MatTableDataSource<Item>;
  constructor(private itemService: ItemService) {
    // this.getAllCartByBuyerId();
    this.dataSource = new MatTableDataSource(this.items);
  }

  ngOnInit() {
  }
  getAllCartByBuyerId() {}

  // call strip api, and after success link to database
  buyItem(userId: number) {
    // this.itemService.buyItem()
    //   .subscribe(() => {
    //   }, error => {
    //     console.log(error);
    //   });
  }
  removeItemFromCart(itemId: number) {
    this.itemService.removeItemFromCart(itemId)
      .subscribe(() => {
      }, error => {
        console.log(error);
      });
  }
}
