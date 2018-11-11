import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromBoard from './board.reducer';

export interface State {

  board: fromBoard.State;
}

export const reducers: ActionReducerMap<State> = {

  board: fromBoard.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
