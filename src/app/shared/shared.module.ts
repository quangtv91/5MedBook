import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormValidationModule} from './form-validation/form-validation.module';
import {CarouselModule, ModalModule, RatingModule} from 'ngx-bootstrap';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgxSpinnerModule} from 'ngx-spinner';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {OwlModule} from 'ngx-owl-carousel';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {CoreModule} from '../core/core.module';

import {HomeComponent} from '../home/home.component';
import {FooterComponent, HeaderComponent} from './components/layout';
import {AutoFocusFieldDirective} from './auto-focus-field/auto-focus-field.directive';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {SwalAlertComponent} from './components/swal-alert/swal-alert.component';
import {CategoryBookComponent} from './components/category-book/category-book.component';
import {CartListComponent} from './components/cart-list/cart-list.component';
import {CommonService} from './common-service/common.service';

const Layout = [
  HomeComponent,
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    Layout,
    AutoFocusFieldDirective,
    SpinnerComponent,
    SwalAlertComponent,
    CategoryBookComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormValidationModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ModalModule,
    RatingModule,
    CarouselModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    SweetAlert2Module,
    OwlModule,
    PdfViewerModule,
    CoreModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FormValidationModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    RatingModule,
    CarouselModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    SweetAlert2Module,
    OwlModule,
    PdfViewerModule,
    SpinnerComponent,
    SwalAlertComponent,
    CategoryBookComponent,
    CartListComponent
  ],
  providers: [
    CommonService
  ]
})
export class SharedModule {
}
