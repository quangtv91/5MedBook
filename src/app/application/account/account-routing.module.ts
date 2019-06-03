import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountDetailComponent} from './account-detail/account-detail.component';
import {MyBookListComponent} from './my-book-list/my-book-list.component';


const routes: Routes = [
  {
    path: 'account-detail',
    component: AccountDetailComponent
  },
  {
    path: 'my-book',
    component: MyBookListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {
}
