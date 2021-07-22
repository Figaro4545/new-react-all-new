import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
// импортируем DevTools
import { DevTools } from './utils/index';


function _applyMiddleware() {
    const middleware = [
        
    ];
    
    return applyMiddleware(...middleware);
}


export default function configureStore(initialState) {
    // передаем DevTools в Compose()
    const store = compose(
        _applyMiddleware(),
        DevTools.instrument()
    )(createStore)(rootReducer, initialState);
    
    return store;
}
