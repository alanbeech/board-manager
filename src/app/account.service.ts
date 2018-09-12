import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  API_URL = 'https://beachclean.net';

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
    localStorage.clear();
  }
}
