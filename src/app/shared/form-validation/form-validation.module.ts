import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ErrorDirective} from './error.directive';
import {ErrorMessageComponent} from './error-message.component';
import {HasErrorDirective} from './has-error.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorDirective,
    ErrorMessageComponent,
    HasErrorDirective,
  ],
  exports: [
    ErrorDirective,
    ErrorMessageComponent,
    HasErrorDirective,
  ]
})

export class FormValidationModule {
}
