import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../../core/models/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  showBookList: Boolean = false;

  bookListData: BookModel[] = [
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      price: '5',
      downloads: 1500,
      year: 2019,
      imageUrl: 'assets/images/book-demo.jpg'
    },
    {
      id: 2,
      title: 'The Pioneers: The Heroic Story of the Settlers Who Brought the American Ideal West ',
      author: 'David McCullough',
      price: '5',
      downloads: 1900,
      year: 2019,
      imageUrl: 'assets/images/book-demo-2.jpg'
    },
    {
      id: 3,
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      price: '5',
      downloads: 1500,
      year: 2019,
      imageUrl: 'assets/images/book-demo-1.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onShowBookList() {
    this.showBookList = !this.showBookList;
  }

}
