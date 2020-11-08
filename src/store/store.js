import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { claseReducers } from '../reducers/clasesReducers';
import { loadingReducers } from '../reducers/loadingReducers';
import {userReducers} from "../reducers/userReducer";


const composeEnhancers = ((typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose);

const reducers = combineReducers({
    auth: authReducer,
    loading: loadingReducers,
    clases: claseReducers,
    user: userReducers
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk ),
));