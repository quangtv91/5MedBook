import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ModalModule} from 'ngx-bootstrap';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxSpinnerModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary mr-2',
      cancelButtonClass: 'btn btn-secondary',
      confirmButtonText:
        '<i class="fa fa-check"></i> Yes',
      cancelButtonText:
        '<i class="fa fa-times"></i> No',
    }),
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
