import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux';
import { getAllUserAction } from '../../redux/actions/QuanLyNguoiDungActions';
export default function FuncApi(props) {

    const {mangNguoiDung} = useSelector(rootReducer => rootReducer.QuanLyNguoiDungReducer)
    const  dispatch = useDispatch();
    // const [mangNguoiDung, setMangNguoiDung] = useState([]);
    useEffect(async () => {
        // try {
            // let result = await axios({
            //     url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
            //     method: 'GET'
            // });

            // setMangNguoiDung(result.data.content);
            let action = getAllUserAction;
            dispatch(action);

        // } catch (errors) {
        //     console.log(errors);
        // }

    }, [])
    const renderNguoiDung = () => {
        return mangNguoiDung.map((nguoiDung, index) => {
            return <div className="col-3 mt-2" key={index}>
                <div className="card">
                    <img src={`https://i.pravatar.cc/150?u=${nguoiDung.email}`} alt="..." />
                    <div className="card-body">
                        <p>Họ tên: {nguoiDung.hoTen}</p>
                        <p>Số điện thoại: {nguoiDung.soDt}</p>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className="container">
            <div className="display-4 text-center">
                Danh sách người dùng
            </div>
            <div className="row">
                {renderNguoiDung()}
            </div>
        </div>
    )
}
