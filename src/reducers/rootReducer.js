import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { CalendarReducer } from './CalendarReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    calendar: CalendarReducer,
    loading: loadingReducer
})