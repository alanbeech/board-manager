import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'board-manager';



  constructor(public dialog: MatDialog) {

  }

  login() {
    // const dialogConfig = new MatDialogConfig();
    //
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      height: '280px',
      width: '600px'
    });
  }
}
