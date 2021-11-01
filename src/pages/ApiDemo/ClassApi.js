import React, { Component } from 'react'
import axios from 'axios'
export default class ClassApi extends Component {

    state = {
        mangNguoiDung: []
    }

    getApi = async () => {
        //Dùng cho trường hợp các api load tuần tự
        try {
            let result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP0197',
                method: 'GET'
            });
            console.log('result', result.data.content)
            this.setState({
                mangNguoiDung: result.data.content
            })
            
        } catch (errors) {
            // console.log({errors})
            alert(errors.response.data.content)
        }

        //Dùng cho trường hợp load nhiều api không tuần tự (không phụ thuộc nhau)
        // //Xử lý thành công
        //Cách 1 :promise
        // promise.then((result)=> {
        //     // console.log({result});
        //     // console.log('result',result);
        //     this.setState({
        //         mangNguoiDung:result.data.content
        //     })
        //     // console.log('123')
        // })
        // //Xử lý thất bại
        // promise.catch((errors)=>{

        //     console.log({errors})
        // })

        // console.log('abc');
    }

    renderNguoiDung = () => {
        return this.state.mangNguoiDung.map((nguoiDung, index) => {
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
