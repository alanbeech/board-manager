import { Action } from '@ngrx/store';
import {Board} from '../../boards/boards.component';

export enum BoardActionTypes {
  LoadBoards = '[Board] Load Boards',
  SetBoards = '[Board] Set Boards'
}

export class LoadBoards implements Action {
  readonly type = BoardActionTypes.LoadBoards;
}

export class SetBoards implements Action {
  readonly type = BoardActionTypes.SetBoards;
  constructor(public payload: Board[]) {}
}

export type BoardActions = LoadBoards | SetBoards;
