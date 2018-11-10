import {Component, Inject, OnInit} from '@angular/core';
import {Board} from '../../boards.component';
import {BoardType} from '../../models/board-type.interface';
import {Status} from '../../../status.interface';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BoardsService} from '../../services/boards.service';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {

  boardData: Board;
  boardId: number;
  selected = 'option2';
  selectedBoardType: string;

  boardTypes: BoardType[] = [
    {value: '0', viewValue: '#2minutebeachclean'},
    {value: '1', viewValue: '#2minutelitterpick'},
    {value: '2', viewValue: '#2minutestreetclean'},
  ];

  statuses: Status[];

  editBoardForm = new FormGroup({
    boardId: new FormControl(this.data.boardId),
    name: new FormControl(this.data.name),
    twoMinuteId: new FormControl(this.data.twoMinuteId),
    location: new FormControl(this.data.location),
    description: new FormControl(this.data.description),
    latitude: new FormControl(this.data.latitude),
    longitude: new FormControl(this.data.longitude),
    boardType: new FormControl(this.data.boardType.toString()),
    status: new FormControl(this.data.status.toString())
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Board,
    private boardsService: BoardsService,
    public dialogRef: MatDialogRef<ViewBoardComponent>,
    private commonService: CommonService) {
    // this.statuses = commonService.getStatusTypes();
  }

  onSubmit() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.selected = this.data.status.toString();
    this.selectedBoardType = this.data.boardType.toString();
  }

}
