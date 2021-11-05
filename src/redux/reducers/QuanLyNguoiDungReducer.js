import { GET_ALL_USER } from "../actions/types/QuanLyNguoiDungTypes";

const stateDefault = {
    mangNguoiDung: [
        {
            "taiKhoan": "0941234234",
            "hoTen": "0941234234",
            "email": "asdfqwe@gmail.com",
            "soDt": "0388888888",
            "matKhau": "0941234234",
            "maLoaiNguoiDung": "KhachHang"
        },
        {
            "taiKhoan": "123@admin",
            "hoTen": "312312",
            "email": "3213214@gmail.com",
            "soDt": "0388888888",
            "matKhau": "123456",
            "maLoaiNguoiDung": "QuanTri"
        }
    ]
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case GET_ALL_USER: {
            state.mangNguoiDung = action.data;
            return {...state};
        }


        default: return { ...state }
    }
}