import { Action } from '@ngrx/store';
import {Board} from '../../boards/boards.component';
import * as boardActions from './../../store/actions/board.actions';


export interface State {
  boards?: Board[];

}

export const initialState: State = {
  boards: null;
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    case boardActions.BoardActionTypes.SetBoards:
      return handleSetBoards(state, action);

    default:
      return state;
  }
}

function handleSetBoards(state: State, action: boardActions.SetBoards): State {
  return {
    ...state,
    boards: action.payload
  };
}
