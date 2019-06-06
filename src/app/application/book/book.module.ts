import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {BookRoutingModule} from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {CheckoutListComponent} from './checkout-list/checkout-list.component';
import {BookAuthorListComponent} from './book-author-list/book-author-list.component';
import {CategoryBookListComponent} from './category-book-list/category-book-list.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    CheckoutListComponent,
    BookAuthorListComponent,
    CategoryBookListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookRoutingModule,
  ],
})
export class BookModule {
}
