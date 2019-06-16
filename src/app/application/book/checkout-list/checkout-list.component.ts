import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {BookModel} from '../../../core/models/book/book.model';
import {BookService} from '../../../core/services/book/book.service';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {
  @ViewChild('deleteMyBookModal') deleteMyBookModal: ModalDirective;

  dataLength;
  totalPrice;
  checkoutListData: BookModel[] = [
    {
      id: 1,
      category: '',
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      year: 2019,
      dateOrder: 'June 6, 2019',
      extension: 'PDF',
      price: 500,
      downloads: 1500,
      rate: null,
      size: '15M',
      imageUrl: 'assets/images/book-demo.jpg',
      detail: 'How to Win Friends and Influence People was first published in 1937 in an edition of only five thousand copies. Neither Dale' +
        ' Carnegie nor the publishers, Simon and Schuster, anticipated more than this modest sale. To their amazement, the book became an' +
        ' overnight sensation, and edition after edition rolled off the presses to keep up with the increasing public demand. Now to Win' +
        ' Friends and InfEuence People took its place in publishing history as one of the all-time international best-sellers...'
    },
    {
      id: 2,
      category: '',
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      year: 2019,
      dateOrder: 'June 6, 2019',
      extension: 'PDF',
      price: 500,
      downloads: 1500,
      rate: null,
      size: '23M',
      imageUrl: 'assets/images/book-demo-1.jpg',
      detail: 'Every day we experience the uncertainty, risks, and emotional exposure that define what it means to be vulnerable or to dare' +
        ' greatly. Based on 12 years of pioneering research, Dr. Brené Brown dispels the cultural myth that vulnerability is weakness and' +
        ' argues that it is, in truth, our most accurate measure of courage...'
    }
  ];

  constructor(
    private bookService: BookService
  ) {
  }

  ngOnInit() {
    this.dataLength = this.checkoutListData.length;
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    const totalPrice = this.checkoutListData.reduce((prev, cur) => prev + cur.price, 0);
    this.totalPrice = totalPrice;
  }

  onDelete() {
    this.deleteMyBookModal.show();
  }

  onSubmitDelete() {
    this.bookService.deleteMyBook().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
