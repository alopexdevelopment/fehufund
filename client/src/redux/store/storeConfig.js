import { createStore, combineReducers } from 'redux';
import { currentTitleReducer, sideNavBarOpenReducer } from '../reducers/uiMotion';


export default () => {
    const store = createStore(
        combineReducers({
            currentTitle: currentTitleReducer,
            sideNavBarOpen: sideNavBarOpenReducer
        })
    );    
    
    return store;
}