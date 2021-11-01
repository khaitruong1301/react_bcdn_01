

const stateDefault = [
    {name:'AA',content:'hello cybersoft'},
    {name:'BB',content:'hello bootcamp ĐN01'},
]
// const stateDefaut = {
//     arrContent: []
// }

// const state = []


export const FakeBookReducer = (state=stateDefault,action) => {

    switch(action.type) {

        case 'COMMENT': {
            // state = [...state,action.userContent]

            return [...state,action.userContent];
        }
        default: {
            return state
        }
    }
}