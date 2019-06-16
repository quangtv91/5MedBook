import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('logoutModal') logoutModal: ModalDirective;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.logoutModal.show();
  }

  onSubmitLogout() {
    localStorage.clear();
    setTimeout(() => {
      const modalElem = document.querySelector('bs-modal-backdrop');
      if (modalElem && modalElem.classList.contains('show')) {
        modalElem.classList.remove('modal-backdrop', 'fade', 'in', 'show');
      }
      document.body.classList.add('login');
      this.router.navigate(['/auth/login']);
    }, 100);
  }

}
