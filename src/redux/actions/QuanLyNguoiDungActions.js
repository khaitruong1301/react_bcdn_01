import axios from 'axios';
import { domain } from '../../util/setting';
import { GET_ALL_USER } from './types/QuanLyNguoiDungTypes';


export const getAllUserAction = (dispatch) => {
    //Xử lý và cò được dữ liệu rồi dispatch lần 2
    let promise = axios({
        url: `${domain}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
        method: 'GET'
    });
    promise.then((result) => {
        const action = {
            type: GET_ALL_USER,
            data: result.data.content
        }

        dispatch(action)
    })
}