import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {BookService} from '../../../core/services/book/book.service';
import {BookModel} from '../../../core/models/book/book.model';

@Component({
  selector: 'app-my-book-list',
  templateUrl: './my-book-list.component.html',
  styleUrls: ['./my-book-list.component.scss']
})
export class MyBookListComponent implements OnInit {
  @ViewChild('deleteMyBookModal') deleteMyBookModal: ModalDirective;

  myBookListData: BookModel[] = [
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      dateOrder: 'June 6, 2019',
      extension: 'PDF',
      size: '15M',
      year: 2019,
      imageUrl: 'assets/images/book-demo.jpg',
      detail: 'How to Win Friends and Influence People was first published in 1937 in an edition of only five thousand copies. Neither Dale' +
        ' Carnegie nor the publishers, Simon and Schuster, anticipated more than this modest sale. To their amazement, the book became an' +
        ' overnight sensation, and edition after edition rolled off the presses to keep up with the increasing public demand. Now to Win' +
        ' Friends and InfEuence People took its place in publishing history as one of the all-time international best-sellers...',
      price: '',
      downloads: null,
    },
    {
      id: 2,
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      dateOrder: 'June 6, 2019',
      extension: 'PDF',
      size: '23M',
      year: 2019,
      imageUrl: 'assets/images/book-demo-1.jpg',
      detail: 'Every day we experience the uncertainty, risks, and emotional exposure that define what it means to be vulnerable or to dare' +
        ' greatly. Based on 12 years of pioneering research, Dr. Brené Brown dispels the cultural myth that vulnerability is weakness and' +
        ' argues that it is, in truth, our most accurate measure of courage...',
      price: '',
      downloads: null,
    },
  ];

  constructor(
    private bookService: BookService
  ) {
  }

  ngOnInit() {
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
