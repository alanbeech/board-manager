import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BoardsComponent} from './boards.component';
import {SharedModule} from '../shared/shared.module';
import {BoardComponent} from './components/board/board.component';


const routes: Routes = [
  {
    path: '',
    component: BoardsComponent
  },
  {
    path: ':id',
    component: BoardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class BoardsRoutingModule {
}
