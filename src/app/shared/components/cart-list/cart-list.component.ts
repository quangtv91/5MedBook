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
      title: 'How to Win Friends & Influence People',
      price: 5,
      imageUrl: 'assets/images/book-demo.jpg',
    },
    {
      id: 2,
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      price: 5,
      imageUrl: 'assets/images/book-demo-1.jpg',
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
