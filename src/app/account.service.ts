import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {LoginResponseModel} from './login-response.model';

export class RegisterModel {

  constructor(public name: string,
              public email: string,
              public onlineId: string,
              public password: string,
              public confirmPassword: string) {}
}

export class ResetPasswordModel {
  constructor(public email: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  API_URL = 'https://beachclean.azurewebsites.net';

  loggedIn = new Subject<boolean>();

  constructor(private  httpClient:  HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post(`${this.API_URL}/token`, `grant_type=password&username=${email}&password=${password}`);
  }

  storeKey(loginResponse: LoginResponseModel) {
    localStorage.setItem('authKey', loginResponse.access_token);
    localStorage.setItem('roles', loginResponse.roles);
    localStorage.setItem('username', loginResponse.userName);
  }

  getKey(): string {
    return localStorage.getItem('authKey');
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }

  isAdmin(): boolean {
    const roles: string[] = JSON.parse(localStorage.getItem('roles')) || [];

    return roles.find(r => r === 'Admin') ? true : false;
  }

  logout() {
    // Todo: need to also call the service to clear it
    this.loggedIn.next(false);
    localStorage.clear();
  }

  createAccount(email: string, password: string, passwordConfirm: string, onlineId: string) {
    const registerModel = new RegisterModel(email, email, onlineId, password, passwordConfirm);
    console.log(registerModel);
    return this.httpClient.post(`${this.API_URL}/account/registerapi`, registerModel);
  }

  sendPasswordResetEmail(email: string) {
    const resetPasswordModel = new ResetPasswordModel(email);
    console.log(resetPasswordModel);
    return this.httpClient.post(`${this.API_URL}/account/MobileForgotPassword`, resetPasswordModel);
  }
}
