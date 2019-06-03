import {Component, OnInit, ViewChild} from '@angular/core';
import {SwalAlertService} from '../../swal-alert/swal-alert.service';
import {SwalAlertComponent} from '../../swal-alert/swal-alert.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('logoutSwalAlert') private logoutSwalAlert: SwalAlertComponent;

  constructor(
    private swalAlertService: SwalAlertService,
  ) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.swalAlertService.openWarningModal();
  }

}
