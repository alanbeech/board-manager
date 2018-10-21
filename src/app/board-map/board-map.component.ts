import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {NotificationType} from '../services/notification-type.enum';
import {Board} from '../boards/boards.component';
import {BoardsService} from '../boards.service';
import {ViewBoardComponent} from '../view-board/view-board.component';

@Component({
  selector: 'app-board-map',
  templateUrl: './board-map.component.html',
  styleUrls: ['./board-map.component.scss']
})
export class BoardMapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  lat2: number = 52.678418;
  lng2: number = 6.809007;
  boards: Array<Board>;
  width: number;
  height: number;

  constructor(private accountService: AccountService, private boardsService: BoardsService, public dialog: MatDialog) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  getBoards(boardType: number) {

    // this.isLoggedIn = this.accountService.getKey() !== '' && this.accountService.getKey() != null ;

    this.boardsService.getBoards(-1).subscribe((data:  Array<Board>) => {
      this.boards  =  data;
      // this.dataSource = new MatTableDataSource(this.boards);
      // this.applyFilter(this.filterInput.value);
    }, (error) => {
      // this.notificationService.showNotification(`Sorry. We are unable to get the boards at this time. Please try later`, NotificationType.Error);
    });
  }

  viewBoard(board: Board) {
    console.log(board);
    const dialogRef = this.dialog.open(ViewBoardComponent, {
      width: '600px',
      data: board
    });

    dialogRef.afterClosed().subscribe((edited: boolean) => { });
  }

  ngOnInit() {
    //this.accountService.loggedIn.subscribe((loggedIn) => {
      // this.isLoggedIn = loggedIn;
      this.getBoards(0);
    //});

  }

}
