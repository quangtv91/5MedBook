import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  showDetailBookData: Boolean = false;

  bookDetailData = [
    {
      id: 1,
      title: 'How to Win Friends & Influence People',
      author: 'Dale Carnegie',
      price: '5',
      downloads: '1500',
      isbn10: '0070070077',
      isbn13: '0070070077777',
      year: '2019',
      pages: '777',
      edition: '19',
      language: 'English',
      extension: 'PDF',
      size: '15M',
      imageUrl: 'assets/images/book-demo.jpg',
      imageDetailUrl: 'assets/images/book-detail-demo.png',
      detail: 'How to Win Friends and Influence People was first published in 1937\n' +
        'in an edition of only five thousand copies. Neither Dale Carnegie nor\n' +
        'the publishers, Simon and Schuster, anticipated more than this\n' +
        'modest sale. To their amazement, the book became an overnight\n' +
        'sensation, and edition after edition rolled off the presses to keep up\n' +
        'with the increasing public demand. Now to Win Friends and\n' +
        'InfEuence People took its place in publishing history as one of the\n' +
        'all-time international best-sellers. It touched a nerve and filled a\n' +
        'human need that was more than a faddish phenomenon of postDepression days, as evidenced by its continued and uninterrupted\n' +
        'sales into the eighties, almost half a century later.',
      detailBookData: 'Dale Carnegie used to say that it was easier to make a million dollars\n' +
        'than to put a phrase into the English language. How to Win Friends\n' +
        'and Influence People became such a phrase, quoted, paraphrased,\n' +
        'parodied, used in innumerable contexts from political cartoon to\n' +
        'novels. The book itself was translated into almost every known\n' +
        'written language. Each generation has discovered it anew and has\n' +
        'found it relevant.'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onShowDetailBookData() {
    this.showDetailBookData = !this.showDetailBookData;
  }

}
