import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {STORAGE_KEYS} from './core/constains/storage-keys';
import {FormStoringService} from './shared/common-service/form-storing.service';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(
    private router: Router,
    private formStoringService: FormStoringService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (!this.formStoringService.get(STORAGE_KEYS.CURRENT_USER)) {
      this.router.navigate(['/auth/login']);
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
  }
}
