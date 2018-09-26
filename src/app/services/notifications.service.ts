import {Injectable} from '@angular/core';
import {NotificationType} from './notification-type.enum';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(public snackBar: MatSnackBar) {}

  showNotification(message: string, type: NotificationType) {
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: type === NotificationType.Error ? ['error-snackbar'] : ['success-snackbar']
    });
  }
}
