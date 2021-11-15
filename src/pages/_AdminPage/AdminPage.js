import React from 'react'
import { Rate } from 'antd';
import { useDispatch } from 'react-redux';


export default function AdminPage(props) {

    const dispatch = useDispatch();

    return (
        <div>
            <p className="text-red">Hello cybersoft</p>
            <Rate allowHalf defaultValue={2.5} />
            <button className="btn btn-success" onClick={() => {
                dispatch({
                    type: 'OPEN_DRAWER',
                    title: 'Thêm người dùng',
                    BodyComponent: <FormThemNguoiDung />,
                    callbackSubmit: () => {
                        alert('Thêm người dùng submit')
                    }
                })
            }}>Thêm người dùng</button>


            <button className="btn btn-success" onClick={() => {
                dispatch({
                    type: 'OPEN_DRAWER',
                    title: 'Sửa người dùng',
                    BodyComponent: <FormSuaNguoiDung />,
                    callbackSubmit: () => {
                        alert('Sửa người dùng submit')
                    }
                })
            }}>Sửa người dùng</button>
        </div>
    )
}

const FormThemNguoiDung = (props) => {
    return <form>
        <div>Thêm người dùng</div>
        <div className="form-group">
            <p>Tài khoản</p>
            <input className="form-control" name="taiKhoan" />
        </div>
        <div className="form-group">
            <p>Mật khẩu</p>
            <input className="form-control" name="taiKhoan" />
        </div>
    </form>
}
const FormSuaNguoiDung = (props) => {
    return <form>
        <div>Sửa người dùng</div>
        <div className="form-group">
            <p>Tài khoản</p>
            <input className="form-control" name="taiKhoan" />
        </div>
        <div className="form-group">
            <p>Mật khẩu</p>
            <input className="form-control" name="taiKhoan" />
        </div>
    </form>
}