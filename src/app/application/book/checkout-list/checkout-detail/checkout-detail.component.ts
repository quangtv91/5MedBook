import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss']
})
export class CheckoutDetailComponent implements OnInit {

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
    private formBuilder: FormBuilder
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
  }

}
