import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../../core/models/book/book.model';

@Component({
  selector: 'app-book-author-list',
  templateUrl: './book-author-list.component.html',
  styleUrls: ['./book-author-list.component.scss']
})
export class BookAuthorListComponent implements OnInit {

  nameAuthor;
  authorInfo = [
    {
      id: 1,
      name: 'Dale Carnegie',
      image: 'assets/images/author-1.jpg',
      about: 'Dale Carnegie (1888-1955) described himself as a "simple country boy" from Missouri but was also a pioneer ' +
        'of the self-improvement genre. Since the 1936 publication of his first book, How to Win Friends and Influence People, he has ' +
        'touched millions of readers and his classic works continue to impact lives to this day.'
    }
  ];
  bookListData: BookModel[] = [
    {
      id: 1,
      category: 'Success Self-Help',
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      price: 5,
      downloads: 1500,
      year: 2019,
      imageUrl: 'assets/images/book-demo.jpg',
      dateOrder: '',
      extension: '',
      size: '',
      detail: 'How to Win Friends and Influence People was first published in 1937\n' +
        'in an edition of only five thousand copies. Neither Dale Carnegie nor\n' +
        'the publishers, Simon and Schuster, anticipated more than this\n' +
        'modest sale. To their amazement...',
      rate: 5
    },
    {
      id: 1,
      category: 'Success Self-Help',
      title: 'How to Stop Worrying and Start Living',
      author: 'Dale Carnegie',
      price: 5,
      downloads: 1500,
      year: 2019,
      imageUrl: 'assets/images/book-demo_1.jpg',
      dateOrder: '',
      extension: '',
      size: '',
      detail: 'Learn how to break the worry habit -- Now and forever! \n' +
        'With Dale Carnegie\'s timeless advice in hand, more than six million people have learned how to eliminate debilitating fear and' +
        ' worry from their lives and to embrace a worry-free future...',
      rate: 5
    },
    {
      id: 1,
      category: 'Success Self-Help',
      title: 'The Quick and Easy Way to Effective Speaking',
      author: 'Dale Carnegie',
      price: 5,
      downloads: 1500,
      year: 2019,
      imageUrl: 'assets/images/book-demo_2.jpg',
      dateOrder: '',
      extension: '',
      size: '',
      detail: 'Now streamlined and updated, the book that has literally put millions on the highway to greater accomplishment and success' +
        ' can show you how to have maximum impact as a speaker--every day, and in every situation that demands winning others over to your' +
        ' point of view...',
      rate: 5
    }
  ];
  myCarouselImages = [
    {
      id: 1,
      price: 5,
      imageUrl: 'assets/images/book-demo.jpg'
    },
    {
      id: 2,
      price: 5,
      imageUrl: 'assets/images/book-demo_1.jpg'
    },
    {
      id: 3,
      price: 5,
      imageUrl: 'assets/images/book-demo_2.jpg'
    },
    {
      id: 4,
      price: 5,
      imageUrl: 'assets/images/book-demo_3.jpg'
    },
    {
      id: 5,
      price: 5,
      imageUrl: 'assets/images/book-demo_4.jpg'
    },
    {
      id: 6,
      price: 5,
      imageUrl: 'assets/images/book-demo_1.jpg'
    },
    {
      id: 7,
      price: 5,
      imageUrl: 'assets/images/book-demo_2.jpg'
    },
    {
      id: 8,
      price: 5,
      imageUrl: 'assets/images/book-demo_3.jpg'
    },
    {
      id: 9,
      price: 5,
      imageUrl: 'assets/images/book-demo_4.jpg'
    }
  ];
  myCarouselOptions = {items: 5, dots: true, nav: true};

  constructor() {
  }

  ngOnInit() {
    this.getAuthorInfo();
  }

  getAuthorInfo() {
    const name = this.authorInfo.find(it => it.name === it.name);
    this.nameAuthor = name.name;
  }

}
