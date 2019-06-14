import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../../core/models/book/book.model';

@Component({
  selector: 'app-category-book-list',
  templateUrl: './category-book-list.component.html',
  styleUrls: ['./category-book-list.component.scss']
})
export class CategoryBookListComponent implements OnInit {

  category;
  max: Number = 5;
  rate: Number = 5;
  myCarouselImages = [
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      imageUrl: 'assets/images/book-demo.jpg'
    },
    {
      id: 2,
      title: 'The Pioneers: The Heroic Story of the Settlers Who Brought the American Ideal West ',
      author: 'David McCullough',
      imageUrl: 'assets/images/book-demo-1.jpg'
    },
    {
      id: 3,
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      imageUrl: 'assets/images/book-demo-2.jpg'
    },
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      imageUrl: 'assets/images/book-demo.jpg'
    },
    {
      id: 2,
      title: 'The Pioneers: The Heroic Story of the Settlers Who Brought the American Ideal West ',
      author: 'David McCullough',
      imageUrl: 'assets/images/book-demo-1.jpg'
    },
    {
      id: 3,
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      imageUrl: 'assets/images/book-demo-2.jpg'
    },
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      imageUrl: 'assets/images/book-demo.jpg'
    },
    {
      id: 2,
      title: 'The Pioneers: The Heroic Story of the Settlers Who Brought the American Ideal West ',
      author: 'David McCullough',
      imageUrl: 'assets/images/book-demo-1.jpg'
    },
    {
      id: 3,
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      imageUrl: 'assets/images/book-demo-2.jpg'
    },
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      imageUrl: 'assets/images/book-demo.jpg'
    },
    {
      id: 2,
      title: 'The Pioneers: The Heroic Story of the Settlers Who Brought the American Ideal West ',
      author: 'David McCullough',
      imageUrl: 'assets/images/book-demo-1.jpg'
    }
  ];

  // This is to generate random placeholder images
  // myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
  // mySlideOptions = {items: 1, dots: true, nav: false};
  // myCarouselOptions = {items: 3, dots: true, nav: true};

  myCarouselOptions = {items: 7, dots: true, nav: true};

  bookListData: BookModel[] = [
    {
      id: 1,
      category: 'Self-Help',
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      price: '5',
      downloads: 1500,
      year: 2019,
      imageUrl: 'assets/images/book-demo.jpg',
      dateOrder: '',
      extension: '',
      size: '',
      detail: 'How to Win Friends and Influence People was first published in 1937\n' +
        'in an edition of only five thousand copies. Neither Dale Carnegie nor\n' +
        'the publishers, Simon and Schuster, anticipated more than this\n' +
        'modest sale. To their amazement, the book became an overnight\n' +
        'sensation, and edition after edition rolled off the presses to keep up\n' +
        'with the increasing public demand. Now to Win Friends and\n' +
        'InfEuence People took its place in publishing history as one of the\n' +
        'all-time international best-sellers...',
      rate: 5
    },
    {
      id: 2,
      category: '',
      title: 'The Pioneers: The Heroic Story of the Settlers Who Brought the American Ideal West ',
      author: 'David McCullough',
      price: '5',
      downloads: 1900,
      year: 2019,
      imageUrl: 'assets/images/book-demo-2.jpg',
      dateOrder: '',
      extension: '',
      size: '',
      detail: 'Pulitzer Prize–winning historian David McCullough rediscovers an important and dramatic chapter in the American story—the' +
        ' settling of the Northwest Territory by dauntless pioneers who overcame incredible hardships to build a community based on ideals' +
        ' that would come to define our country...',
      rate: 5
    },
    {
      id: 3,
      category: '',
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      price: '5',
      downloads: 1500,
      year: 2019,
      imageUrl: 'assets/images/book-demo-1.jpg',
      dateOrder: '',
      extension: '',
      size: '',
      detail: 'Every day we experience the uncertainty, risks, and emotional exposure that define what it means to be vulnerable or to dare' +
        ' greatly. Based on 12 years of pioneering research, Dr. Brené Brown dispels the cultural myth that vulnerability is weakness and' +
        ' argues that it is, in truth, our most accurate measure of courage...',
      rate: 5
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.category = 'Self-Help';
  }

}
