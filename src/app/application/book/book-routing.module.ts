import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {CheckoutListComponent} from './checkout-list/checkout-list.component';
import {BookAuthorListComponent} from './book-author-list/book-author-list.component';
import {CategoryBookListComponent} from './category-book-list/category-book-list.component';

const routes: Routes = [
  {
    path: 'book-list',
    component: BookListComponent,
  },
  {
    path: 'book-detail/:id',
    component: BookDetailComponent,
  },
  {
    path: 'checkout-list',
    component: CheckoutListComponent,
  },
  {
    path: 'author',
    component: BookAuthorListComponent,
  },
  {
    path: 'category-list',
    component: CategoryBookListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {
}
