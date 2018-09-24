import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../account.service';
import {LoginResponseModel} from '../login-response.model';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, private accountService: AccountService) {
  }

  hide = true;
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

  login() {
    this.accountService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((loginResponse: LoginResponseModel) => {
      this.accountService.storeKey(loginResponse.access_token);
      this.dialogRef.close(loginResponse);
      this.accountService.loggedIn.next(true);
    });
  }

  ngOnInit() {
  }

}
