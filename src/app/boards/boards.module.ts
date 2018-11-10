import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardsComponent} from './boards.component';
import {BoardsRoutingModule} from './boards-routing.module';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatSnackBarModule,
  MatTableModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {BoardStatusPipe} from './pipes/status.pipe';
import {BoardTypePipe} from './pipes/board-type.pipe';
import {ViewBoardComponent} from './components/view-board/view-board.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BoardComponent} from './components/board/board.component';
import {BoardMapComponent} from './components/board-map/board-map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BoardsRoutingModule,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDUbFNWPFMqg3PkRP7icfWt1jDZmZCbic'
    }),
  ],
  declarations: [
    BoardsComponent,
    ViewBoardComponent,
    BoardComponent,
    BoardMapComponent,
    BoardStatusPipe,
    BoardTypePipe
  ]
})
export class BoardsModule {
}
