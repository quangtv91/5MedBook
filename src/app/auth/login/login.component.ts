import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalValidator} from '../../shared/form-validation/validators';
import {STORAGE_KEYS} from '../../core/constains/storage-keys';
import {FormStoringService} from '../../shared/common-service/form-storing.service';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  signUpForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private formStoringService: FormStoringService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    if (!this.formStoringService.get(STORAGE_KEYS.CURRENT_USER)) {
      document.body.classList.add('login');
    }
    this.buildLoginForm();
    this.buildSignUpForm();
  }

  private buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, GlobalValidator.emailFormat])],
      password: ['', Validators.required],
    });
  }

  private buildSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, GlobalValidator.emailFormat])],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    const data = this.loginForm.value;
    this.authService.login(data).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  onSignUp() {
    if (this.signUpForm.invalid) {
      return;
    }
    const data = this.signUpForm.value;
    this.authService.signUp(data).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
