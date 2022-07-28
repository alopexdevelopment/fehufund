import { createStore, combineReducers } from 'redux';

// Actions
const transitionToggle = () => ({
    type: 'TOGGLE_TRANSITIONING'
})

const sideNavBarOpenToggle = () => ({
    type: 'TOGGLE_SIDE_NAV'
})

// Reducers
const transitioningReducer = (state = {transitioning: false}) => {
    switch (action.type) {
        case 'TOGGLE_TRANSITIONING':
            return {
                transitioning: !state.transitioning
            }
        default: 
            return {
                transitioning: false
            };
    }
}

const sideNavBarOpenReducer = (state = {sideNavBarOpen: false}) => {
    switch (state.sideNavBarOpen) {
        default: 
            return {
                sideNavBarOpen: !state.sideNavBarOpen
            };
    }
}

// Store
const store = createStore(
    combineReducers({
        transitioning: transitioningReducer,
        sideNavBarOpen: sideNavBarOpenReducer
    })
);


const unsubscribe = store.subscribe(() => {});


const state = store.getState()

console.log(state);

store.dispatch(transitionToggle())

const age = {
    dog: 1,
    dan: 45
}

console.log({
    fam: 'love',
    ...age,
    smash: 'whores'
})