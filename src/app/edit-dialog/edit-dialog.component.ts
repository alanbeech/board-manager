import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PeriodicElement} from '../boards/boards.component';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  boardData: PeriodicElement;

  editBoardForm = new FormGroup({
    name: new FormControl(this.data.beachName)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

}
