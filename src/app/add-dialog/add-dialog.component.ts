import {Component, OnInit} from '@angular/core';
import {Board} from '../boards/boards.component';
import {BoardType} from '../boards/models/board-type.interface';
import {Status} from '../status.interface';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {BoardsService} from '../boards/services/boards.service';
import {Angulartics2} from 'angulartics2';
import {NotificationsService} from '../services/notifications.service';
import {NotificationType} from '../services/notification-type.enum';
import {CommonService} from '../services/common.service';

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

  // OrderPlaced = 0,
  // SpecificationAgreed = 1,
  // PaymentReceived = 2,
  // InProduction = 3,
  // BuildComplete = 4,
  // Delivered = 5,
  // Out = 6,
  // SocialMediaPosted = 7,
  // In = 8

  statuses: Status[]; //  = [
  //   {value: '0', viewValue: 'OrderPlaced'},
  //   {value: '1', viewValue: 'SpecificationAgreed'},
  //   {value: '2', viewValue: 'PaymentReceived'},
  //   {value: '3', viewValue: 'InProduction'},
  //   {value: '4', viewValue: 'BuildComplete'},
  //   {value: '5', viewValue: 'Delivered'},
  //   {value: '6', viewValue: 'Launched'},
  //   {value: '7', viewValue: 'Out'},
  //   {value: '8', viewValue: 'In'}
  // ];

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
    public dialogRef: MatDialogRef<AddDialogComponent>,
    private angulartics2: Angulartics2,
    private notificationService: NotificationsService,
    private commonServicd: CommonService) {
    this.statuses = commonServicd.getStatusTypes();
  }

  onSubmit() {
    this.boardsService.addBoard(this.editBoardForm.value).subscribe(() => {
      console.log('ok');
      this.dialogRef.close(true);
    }, (error) => {
      this.notificationService.showNotification(`Sorry. Unable to add a board at the moment. Please try again later.`, NotificationType.Error);
    });
  }

  ngOnInit() {
    this.angulartics2.eventTrack.next({
      action: 'myAction',
      properties: { category: 'myCategory' },
    });
  }

}
