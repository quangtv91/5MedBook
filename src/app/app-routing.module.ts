import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppGuard} from './app.guard';
import {AuthGuard} from './auth/auth.guard';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AppGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: './application/book/book.module#BookModule',
        data: {
          preload: true
        }
      },
      {
        path: '',
        loadChildren: './application/account/account.module#AccountModule',
        data: {
          preload: true
        }
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    // canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: '/auth/login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [RouterModule],
  providers: [AppGuard, AuthGuard]
})
export class AppRoutingModule {
}
