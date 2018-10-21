import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatSnackBarModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BoardsComponent } from './boards/boards.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import {Angulartics2Module} from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { ViewBoardComponent } from './view-board/view-board.component';
import { BoardTypePipe } from './board-type.pipe';
import { BoardStatusPipe } from './status.pipe';
import {AgmCoreModule} from '@agm/core';
import { BoardMapComponent } from './board-map/board-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressIndicatorsComponent } from './progress-indicators/progress-indicators.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    LoginDialogComponent,
    EditDialogComponent,
    AddDialogComponent,
    ConfirmDeleteComponent,
    ViewBoardComponent,
    BoardTypePipe,
    BoardStatusPipe,
    BoardMapComponent,
    DashboardComponent,
    ProgressIndicatorsComponent,
    ToolbarComponent,
    MenuToolbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    AppRoutingModule,
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
    Angulartics2Module.forRoot([ Angulartics2GoogleTagManager ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDUbFNWPFMqg3PkRP7icfWt1jDZmZCbic'
    })
  ],
  entryComponents: [
    LoginDialogComponent, EditDialogComponent, AddDialogComponent, ConfirmDeleteComponent, ViewBoardComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
