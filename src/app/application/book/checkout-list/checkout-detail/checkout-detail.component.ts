import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SwalAlertService} from '../../../../shared/components/swal-alert/swal-alert.service';
import {SwalAlertComponent} from '../../../../shared/components/swal-alert/swal-alert.component';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss']
})
export class CheckoutDetailComponent implements OnInit {
  @ViewChild('checkoutSwalAlert') private checkoutSwalAlert: SwalAlertComponent;

  form: FormGroup;
  name;
  address;
  priceVnd;
  priceMasterCardVnd;
  priceCreditCardVnd;
  orderInfo = [
    {
      name: 'Do Do',
      address: 'Ha Dong, Ha Noi, Vietnam',
      priceMasterCardVnd: 21000,
      priceCreditCardVnd: 23000
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private swalAlertService: SwalAlertService
  ) {
  }

  ngOnInit() {
    this.buildForm();
    this.getOrderInfo();
    this.onChangePayType();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      payType: ['']
    });
    this.form.setValue({
      payType: 'masterCard'
    });
  }

  getOrderInfo() {
    const orderInfoObj = this.orderInfo.find(it => it === it);
    this.name = orderInfoObj.name;
    this.address = orderInfoObj.address;
    this.priceMasterCardVnd = orderInfoObj.priceMasterCardVnd;
    this.priceCreditCardVnd = orderInfoObj.priceCreditCardVnd;
  }

  onChangePayType() {
    const payType = this.form.get('payType').value;
    if (payType === 'masterCard') {
      this.priceVnd = this.priceMasterCardVnd;
    } else {
      this.priceVnd = this.priceCreditCardVnd;
    }
  }

  onSubmitData() {
    const formValue = this.form.value;
    const dataObject = {
      payType: formValue.payType,
      name: this.name,
      address: this.address,
      priceVnd: this.priceVnd
    };
    console.log(dataObject);
    if (this.priceVnd === this.priceMasterCardVnd) {
      this.swalAlertService.openSuccessModal();
    } else {
      this.swalAlertService.openFailModal('Unable to complete your payment right now', 'Payment Error');
    }
  }

}
