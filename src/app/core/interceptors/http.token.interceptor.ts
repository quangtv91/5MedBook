import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {FormStoringService} from '../../shared/common-service/form-storing.service';
import {STORAGE_KEYS} from '../constains/storage-keys';
import {finalize, tap} from 'rxjs/internal/operators';
import {NgxSpinnerService} from 'ngx-spinner';
import {SwalAlertService} from '../../shared/components/swal-alert/swal-alert.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  count = 0;

  constructor(
    private router: Router,
    private formStoringService: FormStoringService,
    private spinner: NgxSpinnerService,
    private swalAlertService: SwalAlertService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();
    this.count++;

    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
      'If-Modified-Since': '0',
    };

    const token = this.formStoringService.get(STORAGE_KEYS.CURRENT_USER).token;
    if (token) {
      headersConfig = Object.assign({}, headersConfig, {
        'Authorization': `Bearer ${token}`,
      });
    }

    const request = req.clone({headers: new HttpHeaders(headersConfig)});
    return next.handle(request).pipe(tap(() => {
      }, res => {

        switch (res.status) {
          case 401: {
            this.swalAlertService.openFailModal(res.error.message);
            localStorage.clear();
            setTimeout(() => {
              document.body.classList.add('login');
              this.router.navigate(['/auth/login']);
            }, 100);
            break;
          }
          default: {
            this.swalAlertService.openFailModal(res.error.message);
            break;
          }
        }
        return of(res);
      }),
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.spinner.hide();
        }
      })
    );
  }

}
