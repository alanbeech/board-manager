import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import * as boardActions from './../../store/actions/board.actions';
import {BoardsService} from '../../boards/services/boards.service';

@Injectable()
export class BoardEffects {

  constructor(private actions$: Actions,
              private http: HttpClient,
              private boardsService: BoardsService) {
  }

  @Effect()
  loadAuths$: Observable<Action> = this.actions$.pipe(
    ofType(boardActions.BoardActionTypes.LoadBoards),
    switchMap(() => {
      return this.boardsService.getBoards(-1)
        .pipe(
          map((boards: any) => {
            return new boardActions.SetBoards(boards);
          })
        );
    })
  );
}
