import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookListData = [
    {
      id: 1,
      title: 'Dac nhan tam',
      author: 'Dale Carnegie',
      price: '500',
      downloads: '1500',
      year: '2019',
      imageUrl: 'assets/images/book-demo.jpg'
    },
    {
      id: 2,
      title: 'Dac nhan tam',
      author: 'Dale Carnegie',
      price: '500',
      downloads: '1500',
      year: '2019',
      imageUrl: 'assets/images/book-demo.jpg'
    },
    {
      id: 3,
      title: 'Dac nhan tam',
      author: 'Dale Carnegie',
      price: '500',
      downloads: '1500',
      year: '2019',
      imageUrl: 'assets/images/book-demo.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
