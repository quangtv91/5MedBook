import {Injectable, Injector} from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  constructor(injector: Injector) {
    super(injector);
    this.setBaseUrl('');
  }

  login(data) {
    return this.post('', data);
  }

  signUp(data) {
    return this.post('', data);
  }


}
