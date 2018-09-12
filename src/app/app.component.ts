import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {LoginResponseModel} from './login-response.model';
import {AccountService} from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'board-manager';
  isLoggedIn = false;
  email: string;


  constructor(public dialog: MatDialog, private accountService: AccountService) {

  }

  login() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      height: '280px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((loginResult: LoginResponseModel) => {
      this.email = loginResult.userName;
      this.isLoggedIn = true;
    });
  }

  logout() {
    this.accountService.logout();
    this.email = '';
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    const authKey = this.accountService.getKey();
    if (authKey) {
      this.isLoggedIn = true;
    }
  }
}
