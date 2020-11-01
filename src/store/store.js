import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { claseReducers } from '../reducers/clasesReducers';
import { loadingReducers } from '../reducers/loadingReducers';


const composeEnhancers = ((typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose);

const reducers = combineReducers({
    auth: authReducer,
    loading: loadingReducers,
    clases: claseReducers
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk ),
));