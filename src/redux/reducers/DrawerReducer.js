import React from 'react';

const stateDefault = {
    visible: false,
    title: '',
    BodyComponent: <p>Default</p>,
    callbackSubmit: (e) => {
        alert(123);
    }
}


export const DrawerReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'OPEN_DRAWER' : {
            state.title = action.title;
            state.BodyComponent = action.BodyComponent;
            state.callbackSubmit = action.callbackSubmit;
            return {...state,visible:true}
        }
        case 'HIDE_DRAWER': {

            // state.visible = false;
            return { ...state, visible: false }
        }

        default: return { ...state }

    }
}