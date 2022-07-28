export const currentTitleReducer = (state = {currentTitle: 'HOME'}, action) => {
    switch ((action.type)) {
        case 'HOME':
            return {
                currentTitle: 'HOME'
            }
        case 'ABOUT':
            return {
                currentTitle: 'ABOUT'
            }
        case 'TEAM':
            return {
                currentTitle: 'TEAM'
            }
        case 'CONTACT':
            return {
                currentTitle: 'CONTACT'
            }
        default: 
            return {
                currentTitle: state.currentTitle
            };    
    }
}

export const sideNavBarOpenReducer = (state = {sideNavBarOpen: false}, action) => {
    switch (action.type) {
        case 'TOGGLE_SIDE_NAV':
            return {
                sideNavBarOpen: !state.sideNavBarOpen
            }
        default: 
            return {
                sideNavBarOpen: state.sideNavBarOpen
            };
        }   
}