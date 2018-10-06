import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

export class RegisterModel {

  constructor(public name: string,
              public email: string,
              public onlineId: string,
              public password: string,
              public confirmPassword: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  API_URL = 'https://beachclean.net';

  loggedIn = new Subject<boolean>();

  constructor(private  httpClient:  HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post(`${this.API_URL}/token`, `grant_type=password&username=${email}&password=${password}`);
  }

  storeKey(authKey: string) {
    localStorage.setItem('authKey', authKey);
  }

  getKey(): string {
    return localStorage.getItem('authKey');
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
}
