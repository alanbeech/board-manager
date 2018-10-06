import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {LoginResponseModel} from './login-response.model';
import {AccountService} from './account.service';
import {Angulartics2GoogleTagManager} from 'angulartics2/gtm';
import {Angulartics2} from 'angulartics2';
import {NotificationsService} from './services/notifications.service';
import {NotificationType} from './services/notification-type.enum';

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
    private angulartics2: Angulartics2,
    private notificationService: NotificationsService) { }

  login() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      // sheight: '280px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((loginResult: LoginResponseModel) => {
      if (loginResult) {
        this.email = loginResult.userName;
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logout() {
    this.accountService.logout();
    this.email = '';
    this.isLoggedIn = false;
    this.accountService.loggedIn.next(false);
    this.notificationService.showNotification(`You have been logged out.`, NotificationType.Success);
  }

  ngOnInit(): void {
    const authKey = this.accountService.getKey();
    if (authKey) {
      this.isLoggedIn = true;
    }

    // this.angulartics2.eventTrack.next({
    //   action: 'myAction',
    //   properties: {
    //     category: 'myCategory',
    //     label: 'myLabel',
    //   },
    // });


    // @ts-ignore
    // gtag('event', '1234', {
    //   'event_category' : 'bbb2',
    //   'event_label' : 'ccc3'
    // });
  }
}
