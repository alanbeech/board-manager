import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  API_URL = 'https://beachclean.net/api';

  constructor(private  httpClient:  HttpClient) { }

  getBoards(boardType){
    if (boardType >= 0) {
      return  this.httpClient.get(`${this.API_URL}/boardsapp/?boardType=${boardType}`);

    } else {
      return  this.httpClient.get(`${this.API_URL}/boardsapp`);

    }
  }
}
