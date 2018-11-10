import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {UsersComponent} from './users/users.component';
import { BoardGuardiansComponent } from './board-guardians/board-guardians.component';
import { BoardGuardianAngelsComponent } from './board-guardian-angels/board-guardian-angels.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    HttpClientModule,
    MatFormFieldModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDividerModule,
    MatBadgeModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
  ],
  declarations: [UsersComponent, BoardGuardiansComponent, BoardGuardianAngelsComponent, BoardGuardiansComponent, BoardGuardianAngelsComponent]
})
export class AdminModule { }
