import {combineReducers, createStore} from 'redux'
import { FakeBookReducer } from './reducers/FakeBookReducer';

const rootReducer = combineReducers({
    //Nơi kháo các state của ứng dụng
    FakeBookReducer
});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


/*
    Thư viện cài đặt
    npm i react-redux
    npm i redux
*/
