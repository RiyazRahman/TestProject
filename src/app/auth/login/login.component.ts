import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { AuthenticationService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: boolean;
  otpRequestStatusCode: any;
  otpFormControlCheck: any;
  isLoginError: boolean;
  dataLoaded: boolean;
  constructor(private authService: AuthenticationService,
              private formBuilder: FormBuilder,
              private router: Router) {
                if (sessionStorage.getItem('userToken')) {
                  router.navigate(['/dashboard']);
                }
              }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[6789][0-9]{9}')]),
    });
    this.otpFormControlCheck = this.loginForm.controls.otp;
  }

  get f() {
    return this.loginForm.controls;
  }

  formValidate() {
    this.otpRequestStatusCode ? this.verifyUerWithOTP() : this.onLogin();
  }


  onLogin() {
    const username = this.loginForm.value.username;
    const phone = this.loginForm.value.phone;
    this.authService.loginUser(username, phone).subscribe(
      data => {
        this.otpRequestStatusCode = data.status;
        this.checkStatus();
      });
  }


  checkStatus() {
    if (this.otpRequestStatusCode === 200) {
      this.loginForm.setControl('otp', new FormControl());
      this.loginForm.controls.otp.setValidators([Validators.required, Validators.pattern('^[0-9]{6}')]);
      this.otpFormControlCheck = this.loginForm.controls.otp;
    }
    this.dataLoaded = true;
  }

  verifyUerWithOTP() {
    const phone = this.loginForm.value.phone;
    const otp = this.loginForm.value.otp;
    this.authService.verfiyOTP(phone, otp).subscribe(
      (data: any) => {
        sessionStorage.setItem('userToken', data.access_token);
        this.router.navigate(['/dashboard']);
      },
      (error: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }
}
