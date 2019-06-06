import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService extends ApiService {

  constructor(injector: Injector) {
    super(injector);
    this.setBaseUrl('');
  }

  deleteCartItem() {
    return this.delete('');
  }

}
