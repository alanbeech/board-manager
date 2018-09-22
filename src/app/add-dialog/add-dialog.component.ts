import {Component, Inject, OnInit} from '@angular/core';
import {Board} from '../boards/boards.component';
import {BoardType} from '../board-type.interface';
import {Status} from '../status.interface';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BoardsService} from '../boards.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  boardData: Board;
  boardId: number;
  selected = 'option2';
  selectedBoardType: string;

  boardTypes: BoardType[] = [
    {value: '0', viewValue: '#2minutebeachclean'},
    {value: '1', viewValue: '#2minutelitterpick'},
    {value: '2', viewValue: '#2minutestreetclean'},
  ];

  statuses: Status[] = [
    {value: '0', viewValue: 'General'},
    {value: '1', viewValue: 'MoreDetailNeeded'},
    {value: '2', viewValue: 'InitialStages'},
    {value: '3', viewValue: 'InProduction'},
    {value: '4', viewValue: 'AwayForWinter'},
    {value: '5', viewValue: 'NeedsRepair'},
    {value: '6', viewValue: 'NotOut'},
  ];

  editBoardForm = new FormGroup({
    // boardId: new FormControl(this.data.boardId),
    name: new FormControl(''),
    twoMinuteId: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
    latitude: new FormControl(0),
    longitude: new FormControl(0),
    boardType: new FormControl(0),
    status: new FormControl(0)
  });

  constructor(
    private boardsService: BoardsService,
    public dialogRef: MatDialogRef<AddDialogComponent>) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(JSON.stringify(this.editBoardForm.value));
    this.boardsService.addBoard(this.editBoardForm.value).subscribe(() => {
      console.log('ok');
      this.dialogRef.close(true);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    // this.selected = this.data.status.toString();
    // this.selectedBoardType = this.data.boardType.toString();

  }

}
