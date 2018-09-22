import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatSelectModule, MatSnackBarModule,
  MatTableModule,
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
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';


@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    LoginDialogComponent,
    EditDialogComponent,
    AddDialogComponent,
    ConfirmDeleteComponent
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
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  entryComponents: [
    LoginDialogComponent, EditDialogComponent, AddDialogComponent, ConfirmDeleteComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
