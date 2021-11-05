import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';import { getAllUserAction } from '../../redux/actions/QuanLyNguoiDungActions';
 class ClassApi extends Component {

    state = {
        mangNguoiDung: []
    }

    getApi = async () => {
       
        //Tạo ra action là 1 hàm có 1 tham số dispatch
        let action = getAllUserAction;
        //dispatch hàm đó lên redux
        this.props.dispatch(action);

    }

    renderNguoiDung = () => {
        return this.props.mangNguoiDung.map((nguoiDung, index) => {
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



    render() {
        return (
            <div className="container">
                <button className="btn btn-danger" onClick={() => {
                    this.getApi()
                }}>Get api</button>

                <div className="display-4 text-center">
                    Danh sách người dùng
                </div>
                <div className="row">
                    {this.renderNguoiDung()}
                </div>
            </div>
        )
    }


    componentDidMount() {
        //Gọi sau khi giao diện render html xong
        this.getApi();
    }
}



const mapStateToProps = rootReducer => {
    return {
        mangNguoiDung:rootReducer.QuanLyNguoiDungReducer.mangNguoiDung
    }
}

export default connect(mapStateToProps)(ClassApi)