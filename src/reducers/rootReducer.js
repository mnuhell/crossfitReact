import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { calendarReducer } from './calendarReducer';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    calendar: calendarReducer,
    loading: loadingReducer,
    user: userReducer
})