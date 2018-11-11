import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
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
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginDialogComponent} from './components/login-dialog/login-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditDialogComponent} from './boards/components/edit-dialog/edit-dialog.component';
import {AddDialogComponent} from './add-dialog/add-dialog.component';
import {ConfirmDeleteComponent} from './components/confirm-delete/confirm-delete.component';
import {Angulartics2Module} from 'angulartics2';
import {Angulartics2GoogleTagManager} from 'angulartics2/gtm';
import {ViewBoardComponent} from './boards/components/view-board/view-board.component';
import {AgmCoreModule} from '@agm/core';
import {ProgressIndicatorsComponent} from './boards/components/progress-indicators/progress-indicators.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MenuToolbarComponent} from './components/menu-toolbar/menu-toolbar.component';
import {BoardsModule} from './boards/boards.module';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { BoardEffects } from './store/effects/board.effects';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    EditDialogComponent,
    AddDialogComponent,
    ConfirmDeleteComponent,
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
    MatProgressSpinnerModule,
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDUbFNWPFMqg3PkRP7icfWt1jDZmZCbic'
    }),
    BoardsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, BoardEffects])
  ],
  entryComponents: [
    LoginDialogComponent, EditDialogComponent, AddDialogComponent, ConfirmDeleteComponent, ViewBoardComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
