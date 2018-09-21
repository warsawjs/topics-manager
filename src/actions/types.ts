import { AnyAction } from 'redux';
// R S E A - Return type of the Thunk, S type of Root State, Extra args, A - all actions that can be dispatched
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers';

// AT - possible action types
export type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;

export type Dispatch<AT> = ThunkDispatch<RootState, undefined, AnyAction>;
