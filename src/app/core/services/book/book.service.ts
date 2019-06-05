import {Injectable, Injector} from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends ApiService {

  constructor(injector: Injector) {
    super(injector);
    this.setBaseUrl('');
  }

  deleteMyBook() {
    return this.delete('');
  }


}
