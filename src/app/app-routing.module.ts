import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardMapComponent} from './boards/components/board-map/board-map.component';
import {BoardComponent} from './boards/components/board/board.component';

const routes: Routes = [
  { path: '', redirectTo: '/boards', pathMatch: 'full' },
  // { path: 'boards/:filter', component: BoardsComponent },
  // { path: 'boards', component: BoardsComponent },
  { path: 'board/:id', component: BoardComponent },
  { path: 'map', component: BoardMapComponent },
  { path: 'feed', loadChildren: './feed/feed.module#FeedModule'},
  { path: 'boards', loadChildren: './boards/boards.module#BoardsModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
