import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountService} from '../../account.service';
import {LoginResponseModel} from '../../login-response.model';
import {NotificationsService} from '../../services/notifications.service';
import {NotificationType} from '../../services/notification-type.enum';
import {HttpErrorResponse} from '@angular/common/http';

// export class RegisterModel {
//
//   constructor(public name: string,
//   public email: string,
//   public onlineId: string,
//   public password: string,
//   public confirmPassword: string) {}
// }

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  createErrorMessage: string;
  loginErrorMessage: string;
  resetErrorMessage: string;
  selectedTabIndex = 0;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  // var registerModel = new RegisterModel();
  // registerModel.Name = registerEmail;
  // registerModel.OnlineId = registerUsername;
  // registerModel.Password = registerPassword;
  // registerModel.Email = registerEmail;
  // registerModel.ConfirmPassword = registerPassword;

  createForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    onlineId: new FormControl(''),
    passwordConfirm: new FormControl('')
  });

  resetPasswordForm = new FormGroup({
    email: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private accountService: AccountService,
    private notificationService: NotificationsService) {
  }

  hide = true;
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

  login() {

    this.doLogin(this.loginForm.value.email, this.loginForm.value.password);
  }

  doLogin(email: string, password: string) {
    this.accountService.login(email, password).subscribe((loginResponse: LoginResponseModel) => {
      console.log(loginResponse);
      this.accountService.storeKey(loginResponse);
      this.dialogRef.close(loginResponse);
      this.accountService.loggedIn.next(true);
      this.loginErrorMessage = '';
      this.notificationService.showNotification(`You have successfully logged in. Welcome!`, NotificationType.Success);
    }, (error) => {
      console.log(error);
      this.loginErrorMessage = 'Unable to log in. Please check your details and try again.';
      // this.notificationService.showNotification(`Unable to log in. Please check your details and try again.`, NotificationType.Error);
    });
  }

  createAccount() {
    this.accountService.createAccount(this.createForm.value.email, this.createForm.value.password, this.createForm.value.passwordConfirm, this.createForm.value.onlineId).subscribe((loginResponse: LoginResponseModel) => {
      // this.accountService.storeKey(loginResponse.access_token);
      this.dialogRef.close(loginResponse);
      this.accountService.loggedIn.next(true);
      this.createErrorMessage = '';
      this.notificationService.showNotification(`You have successfully created an account. Welcome!`, NotificationType.Success);
      this.doLogin(this.createForm.value.email, this.createForm.value.password);
    }, (error: HttpErrorResponse) => {
      switch (error.status) {
        case 409: // already exists
          // this.notificationService.showNotification(error.message, NotificationType.Error);
          this.createErrorMessage = 'Sorry. We were unable to create an account as an account with the email address supplied already exists';
          break;
        default:
          this.createErrorMessage = 'Sorry. We were unable to create an account at this time. Please try later.';
          // this.notificationService.showNotification(error.message, NotificationType.Error);
      }

    });

  }

  sendPasswordResetEmail() {
    this.accountService.sendPasswordResetEmail(this.resetPasswordForm.value.email).subscribe((loginResponse: LoginResponseModel) => {
      this.resetErrorMessage = '';
      this.selectedTabIndex = 0;
      this.notificationService.showNotification(`We have sent you a password reset email. Please check your inbox.`, NotificationType.Success);
    }, (error: HttpErrorResponse) => {

      console.log(error);
      //
      switch (error.status) {
        case 200:
          this.resetErrorMessage = '';
          this.selectedTabIndex = 0;
          this.notificationService.showNotification(`We have sent you a password reset email. Please check your inbox.`, NotificationType.Success);
          break;
        case 404: // not found
          this.resetErrorMessage = 'Sorry. We cannot find an account registered using the email provided.';
          break;
        default:
          this.resetErrorMessage = 'Sorry. We were unable to send you a password reset email at this time. Please try again later.';
      }

    });
  }

  ngOnInit() {
  }

}
