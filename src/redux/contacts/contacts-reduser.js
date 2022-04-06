import {
  createReducer,  
} from '@reduxjs/toolkit';
import * as contactsAction from './contacts-actions';

 export const filter = createReducer('', {
  [contactsAction.filterAct]: (_, { payload }) => payload,
});

