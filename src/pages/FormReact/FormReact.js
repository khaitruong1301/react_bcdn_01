import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup'
export default function FormReact(props) {
    
    const formik = useFormik({
        initialValues: {
            taiKhoan:'',
            matKhau:'',
            hoTen:'',
            email:'',
            soDt:'',
            maNhom:'GP01'
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống !'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').min(6, 'Mật tối thiểu 6 ký tự').max(32,'Mật khẩu tối đa 32 ký tự'),
            email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng'),
            soDt: Yup.string().required('Số điện thoại không được bỏ trống !').matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            ,'Số điện thoại không đúng định dạng'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống !'),
        }),
        onSubmit: (values) => {
            console.log('values',values);
        }
    })
    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Đăng ký</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.taiKhoan && formik.errors.taiKhoan && <div className="alert alert-danger">{formik.errors.taiKhoan}</div>}
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input type="password" className="form-control" name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.matKhau && formik.errors.matKhau && <div className="alert alert-danger">{formik.errors.matKhau}</div>}
            </div>
            <div className="form-group">
                <p>Họ tên</p>
                <input type="password" className="form-control" name="hoTen"  onChange={formik.handleChange}/>
            </div>
            <div className="form-group">
                <p>Email</p>
                <input type="text" className="form-control" name="email" onChange={formik.handleChange}/>
            </div>
            <div className="form-group">
                <p>Số điện thoại</p>
                <input type="text" className="form-control" name="soDt"  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.soDt && formik.errors.soDt && <div className="alert alert-danger">{formik.errors.soDt}</div>}
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submit">Đăng ký</button>
            </div>
        </form>
    )
}
