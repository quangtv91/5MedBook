import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../../core/services/account/account.service';
import {fieldMatch} from '../../../shared/form-validation/field-match';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        password: ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {validator: fieldMatch('newPassword', 'confirmPassword')});
    this.form.patchValue({
      firstName: 'Do',
      lastName: 'Do',
      email: 'dodo@gmail.com'
    });
  }

  onSubmitData() {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;
    this.accountService.changePassword(data).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
