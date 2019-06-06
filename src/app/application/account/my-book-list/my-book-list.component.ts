import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {BookService} from '../../../core/services/book/book.service';

@Component({
  selector: 'app-my-book-list',
  templateUrl: './my-book-list.component.html',
  styleUrls: ['./my-book-list.component.scss']
})
export class MyBookListComponent implements OnInit {
  @ViewChild('deleteMyBookModal') deleteMyBookModal: ModalDirective;

  myBookListData = [
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      dateOrder: 'June 6, 2019',
      extension: 'PDF',
      size: '15M',
      year: '2019',
      imageUrl: 'assets/images/book-demo.jpg'
    },
    {
      id: 2,
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      dateOrder: 'June 6, 2019',
      extension: 'PDF',
      size: '23M',
      year: '2019',
      imageUrl: 'assets/images/book-demo-1.jpg'
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
