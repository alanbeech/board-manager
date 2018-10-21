import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardsComponent} from './boards/boards.component';
import {BoardMapComponent} from './board-map/board-map.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'boards/:filter', component: BoardsComponent },
  { path: 'boards', component: BoardsComponent },
  { path: 'map', component: BoardMapComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
