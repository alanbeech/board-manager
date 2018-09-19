import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Board} from './boards/boards.component';
import {AccountService} from './account.service';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  API_URL = 'https://beachclean.net/api';

  constructor(private  httpClient:  HttpClient, private accountService: AccountService) {
    this.httpClient.request
  }

  getBoards(boardType){
    if (boardType >= 0) {
      return  this.httpClient.get(`${this.API_URL}/boardsapp/?boardType=${boardType}`);

    } else {
      return  this.httpClient.get(`${this.API_URL}/boardsapp`);

    }
  }

  updateBoard(value: Board) {
    let headers = new HttpHeaders();
    headers = headers.set('ZUMO-API-VERSION', '2.0.0');
    headers = headers.set('Authorization', 'Bearer ' + this.accountService.getKey());
    return this.httpClient.put(`${this.API_URL}/boardsapp/${value.boardId}`, value, {
      headers: headers
    });
  }
}
