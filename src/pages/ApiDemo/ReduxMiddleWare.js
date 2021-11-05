import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { getAllUserAction } from '../../redux/actions/QuanLyNguoiDungActions';
export default function ReduxMiddleWare() {

    let mangNguoiDung = useSelector(rootReducer => rootReducer.QuanLyNguoiDungReducer.mangNguoiDung);
    let dispatch = useDispatch();


    useEffect(() => {
        //Gọi api sau khi giao diện render (Giống didmount lifecycle bên class component)
        // let promise =  axios({
        //     url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
        //     method: 'GET'
        // });
        // promise.then((result) => { 
        //     const action = {
        //         type:'GET_ALL_USER',
        //         data: result.data.content
        //     }

        //     dispatch(action)
        // })

        //dispatch action có 2 loại:
        /*
            Loại 1: dispatch 1 object có sẵn {type: , data}
            Loại 2: dispatch 1 function => function đó sẽ thực thi xong có dữ liệu rồi sẽ tiến hành dispatch lần
         */
        //Tạo ra action loại 2
        const action = getAllUserAction;
        dispatch(action)

    },[])



    return (
        <div className="container">
            <h3>Danh sách người dùng</h3>
            <div className="row">
                {mangNguoiDung.map((nguoiDung, index) => {
                    return <div className="col-3">
                        <div className="card">
                            <img src={`https://i.pravatar.cc?u=${nguoiDung.taiKhoan}`} alt="..." />
                            <div className="card-body">
                                <p>Họ tên: {nguoiDung.hoTen}</p>
                                <p>Số điện thoại: {nguoiDung.soDt}</p>
                            </div>
                        </div>
                    
                    </div>
                })}
            </div>
        </div>
    )
}
