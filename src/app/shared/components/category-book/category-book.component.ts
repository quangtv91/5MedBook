import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-category-book',
  templateUrl: './category-book.component.html',
  styleUrls: ['./category-book.component.scss'],
})
export class CategoryBookComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [
    {
      id: 1,
      name: 'Education & Teaching',
    },
    {
      id: 2,
      name: 'Engineering & Transportation',
    },
    {
      id: 3,
      name: 'Health, Fitness & Dieting',
    },
    {
      id: 4,
      name: 'History',
    },
  ];
  temp = [];
  tempData = this.rows; // this the new temp array
  columns = [{prop: 'name'}];
  selected = [];

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.rows = [...this.tempData]; // and here you have to initialize it with your data
    this.temp = [...this.rows];

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelect(event) {
    console.log('Event: select', event, this.selected);
    this.router.navigate(['/category-list']);
  }

}
