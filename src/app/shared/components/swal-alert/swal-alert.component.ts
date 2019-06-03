import {Component, OnInit, ViewChild} from '@angular/core';
import {SwalAlertService} from './swal-alert.service';

@Component({
  selector: 'swal-alert',
  templateUrl: './swal-alert.component.html'
})
export class SwalAlertComponent implements OnInit {
  @ViewChild('forceErrorModal') forceErrorModal;
  @ViewChild('forceSuccessModal') forceSuccessModal;
  @ViewChild('forceWarningModal') forceWarningModal;
  @ViewChild('forceConfirmLogoutModal') forceConfirmLogoutModal;

  constructor(
    private swalAlertService: SwalAlertService
  ) {
  }

  get title() {
    return this.swalAlertService.title;
  }

  get message() {
    return this.swalAlertService.message;
  }

  ngOnInit() {
    this.swalAlertService.setFailModal(this.forceErrorModal);
    this.swalAlertService.setSuccessModal(this.forceSuccessModal);
    this.swalAlertService.setWarningModal(this.forceWarningModal);
    this.swalAlertService.setWarningModal(this.forceConfirmLogoutModal);
  }
}
