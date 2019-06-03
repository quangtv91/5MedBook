import {Injectable, Injector} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private baseUrl: string;
  protected http: HttpClient = this.injector.get(HttpClient);
  numberFields = ['ordering'];

  constructor(
    protected injector: Injector,
  ) {
  }

  setBaseUrl(url: string) {
    this.baseUrl = `${environment.api_url}${url}`;
  }

  private buildUrl(url?: string) {
    return this.baseUrl + url;
  }

  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(this.buildUrl(url), {params});
  }

  put(url: string, body: Object = {}): Observable<any> {
    return this.http.put(this.buildUrl(url), JSON.stringify(body));
  }

  post(url: string, body: Object = {}): Observable<any> {
    return this.http.post(this.buildUrl(url), JSON.stringify(body));
  }

  delete(url: string): Observable<any> {
    return this.http.delete(this.buildUrl(url));
  }

  download(url: string, body: Object = {}): Observable<any> {
    body = this.formatDataBeforeSend(body, this.numberFields);
    return this.http.post(this.buildUrl(url), JSON.stringify(body), {responseType: 'blob', observe: 'response'});
  }

  downloadByGet(url: string, body: Object = {}): Observable<any> {
    return this.http.post(this.buildUrl(url), JSON.stringify(body), {responseType: 'blob', observe: 'response'});
  }

  private formatDataBeforeSend(data, numberFields?) {
    // trim space and convert number field
    const current = data;
    if (current && typeof current === 'object') {
      if (numberFields) {
        numberFields.forEach(field => {
          if (current[field] && typeof current[field] === 'string') {
            current[field] = parseInt(current[field].replace(/,/g, ''));
          }
        });
      }
      for (let key in current) {
        if (typeof current[key] === 'string') {
          current[key] = current[key].trim() !== '' ? current[key].trim() : undefined;
        }
      }
    }
    return current;
  }


}
