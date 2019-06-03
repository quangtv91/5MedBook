import {Injectable, Injector} from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ApiService {

  constructor(injector: Injector) {
    super(injector);
    this.setBaseUrl('');
  }

  changePassword(data) {
    return this.post('', data);
  }


}
