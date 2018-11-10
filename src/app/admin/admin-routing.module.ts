import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {UsersComponent} from './users/users.component';
import {BoardGuardiansComponent} from './board-guardians/board-guardians.component';
import {BoardGuardianAngelsComponent} from './board-guardian-angels/board-guardian-angels.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'board-guardians/:id',
    component: BoardGuardiansComponent
  },
  {
    path: 'board-guardian-angels/:id',
    component: BoardGuardianAngelsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
