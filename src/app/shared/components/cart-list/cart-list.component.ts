import {Component, OnInit} from '@angular/core';
import {CheckoutService} from '../../../core/services/book/checkout.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {

  cartListData = [
    {
      id: 1,
      title: 'Dac nhan tam',
      price: '5',
      imageUrl: 'assets/images/book-demo.jpg',
    },
    {
      id: 2,
      title: 'Dac nhan tam',
      price: '5',
      imageUrl: 'assets/images/book-demo.jpg',
    },
  ];

  constructor(
    private checkoutService: CheckoutService,
  ) {
  }

  ngOnInit() {
  }

  onSubmitDelete() {
    this.checkoutService.deleteCartItem().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
