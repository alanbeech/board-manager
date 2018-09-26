import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-map',
  templateUrl: './board-map.component.html',
  styleUrls: ['./board-map.component.scss']
})
export class BoardMapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {

  }

}
