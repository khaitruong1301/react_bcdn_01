import {applyMiddleware, combineReducers, createStore} from 'redux'
import { FakeBookReducer } from './reducers/FakeBookReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';

//Cấu hình middleware
import reduxThunk  from 'redux-thunk'

const rootReducer = combineReducers({
    //Nơi kháo các state của ứng dụng
    FakeBookReducer,
    QuanLyNguoiDungReducer:QuanLyNguoiDungReducer
});

export const store = createStore(rootReducer,applyMiddleware(reduxThunk));


/*
    Thư viện cài đặt
    npm i react-redux
    npm i redux
*/
