import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-book-list',
  templateUrl: './my-book-list.component.html',
  styleUrls: ['./my-book-list.component.scss']
})
export class MyBookListComponent implements OnInit {

  myBookListData = [
    {
      id: 1,
      title: 'Dac nhan tam',
      author: 'Dale Carnegie',
      dateOrder: 'June 6, 2019',
      type: 'PDF',
      size: '15M',
      year: '2019',
      imageUrl: 'assets/images/book-demo.jpg'
    },
    {
      id: 2,
      title: 'Dac nhan tam',
      author: 'Dale Carnegie',
      dateOrder: 'June 6, 2019',
      type: 'PDF',
      size: '23M',
      year: '2019',
      imageUrl: 'assets/images/book-demo.jpg'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
