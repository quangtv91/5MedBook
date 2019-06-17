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
  orderInfo = [
    {
      name: 'Do Do',
      address: 'Ha Dong, Ha Noi, Vietnam'
    }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.buildForm();
    this.getOrderInfo();
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
  }

  onSubmitData() {
    const formValue = this.form.value;
    const dataObject = {
      payType: formValue.payType,
      name: this.name,
      address: this.address
    };
    console.log(dataObject);
  }

}
