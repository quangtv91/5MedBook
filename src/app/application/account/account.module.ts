import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {AccountRoutingModule} from './account-routing.module';
import {AccountDetailComponent} from './account-detail/account-detail.component';
import {MyBookListComponent} from './my-book-list/my-book-list.component';

@NgModule({
  declarations: [
    AccountDetailComponent,
    MyBookListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule {
}
