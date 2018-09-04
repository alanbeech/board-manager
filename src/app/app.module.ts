import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatPaginatorModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BoardsComponent } from './boards/boards.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {FormControl} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    LoginDialogComponent
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
    MatFormFieldModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
