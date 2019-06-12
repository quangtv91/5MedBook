import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-book-list',
  templateUrl: './category-book-list.component.html',
  styleUrls: ['./category-book-list.component.scss'],
})
export class CategoryBookListComponent implements OnInit {

  myCarouselImages = [
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      imageUrl: 'assets/images/book-demo.jpg',
    },
    {
      id: 2,
      title: 'The Pioneers: The Heroic Story of the Settlers Who Brought the American Ideal West ',
      author: 'David McCullough',
      imageUrl: 'assets/images/book-demo-1.jpg',
    },
    {
      id: 3,
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      imageUrl: 'assets/images/book-demo-2.jpg',
    },
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      imageUrl: 'assets/images/book-demo.jpg',
    },
    {
      id: 2,
      title: 'The Pioneers: The Heroic Story of the Settlers Who Brought the American Ideal West ',
      author: 'David McCullough',
      imageUrl: 'assets/images/book-demo-1.jpg',
    },
    {
      id: 3,
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      imageUrl: 'assets/images/book-demo-2.jpg',
    },
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      imageUrl: 'assets/images/book-demo.jpg',
    },
    {
      id: 2,
      title: 'The Pioneers: The Heroic Story of the Settlers Who Brought the American Ideal West ',
      author: 'David McCullough',
      imageUrl: 'assets/images/book-demo-1.jpg',
    },
    {
      id: 3,
      title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
      author: 'Brené Brown',
      imageUrl: 'assets/images/book-demo-2.jpg',
    },
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      imageUrl: 'assets/images/book-demo.jpg',
    },
    {
      id: 2,
      title: 'The Pioneers: The Heroic Story of the Settlers Who Brought the American Ideal West ',
      author: 'David McCullough',
      imageUrl: 'assets/images/book-demo-1.jpg',
    },
  ];

  // This is to generate random placeholder images
  myCarouselOptions = { items: 7, dots: true, nav: true };

  constructor() {
  }

  ngOnInit() {
  }

}
