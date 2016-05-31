import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    streams: require('./streamReducer').default,
    stream: require('./singleStreamReducer').default,
    routing: routerReducer
});
