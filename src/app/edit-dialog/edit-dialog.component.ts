import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Board} from '../boards/boards.component';
import {BoardsService} from '../boards.service';

export interface Food {
  value: string;
  viewValue: string;
}

export interface BoardType {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})



export class EditDialogComponent implements OnInit {

  boardData: Board;
  boardId: number;
  selected = 'option2';
  selectedBoardType: string;

  boardTypes: BoardType[] = [
    {value: '0', viewValue: '#2minutebeachclean'},
    {value: '1', viewValue: '#2minutelitterpick'},
    {value: '2', viewValue: '#2minutestreetclean'},
  ];

  foods: Food[] = [
    {value: '0', viewValue: 'General'},
    {value: '1', viewValue: 'MoreDetailNeeded'},
    {value: '2', viewValue: 'InitialStages'},
    {value: '3', viewValue: 'InProduction'},
    {value: '4', viewValue: 'AwayForWinter'},
    {value: '5', viewValue: 'NeedsRepair'},
    {value: '6', viewValue: 'NotOut'},
  ];


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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Board, private boardsService: BoardsService, public dialogRef: MatDialogRef<EditDialogComponent>) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.editBoardForm.value);
    this.boardsService.updateBoard(this.editBoardForm.value).subscribe(() => {
      console.log('ok');
      this.dialogRef.close(true);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    // this.boardId = this.boardData.boardId;

    this.selected = this.data.status.toString();
    this.selectedBoardType = this.data.boardType.toString();

  }

}
