import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MatIconRegistry} from '@angular/material';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {LoginResponseModel} from './login-response.model';
import {AccountService} from './account.service';
import {Angulartics2GoogleTagManager} from 'angulartics2/gtm';
import {Angulartics2} from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'board-manager';
  isLoggedIn = false;
  email: string;


  constructor(
    public dialog: MatDialog,
    private accountService: AccountService,
    angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    private angulartics2: Angulartics2) { }

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
    this.accountService.loggedIn.next(false);
  }

  ngOnInit(): void {
    const authKey = this.accountService.getKey();
    if (authKey) {
      this.isLoggedIn = true;
    }

    this.angulartics2.eventTrack.next({
      action: 'myAction',
      properties: {
        category: 'myCategory',
        label: 'myLabel',
      },
    });


    // @ts-ignore
    gtag('event', '1234', {
      'event_category' : 'bbb2',
      'event_label' : 'ccc3'
    });
  }
}
