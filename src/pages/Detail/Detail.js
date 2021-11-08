import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { layThongTinChiTietPhimAction } from '../../redux/actions/FilmActions';
export default function Detail(props) {

    //Kết nối redux lấy chiTietPhim từ FilmReducer về
    const {chiTietPhim} = useSelector(rootReducer => rootReducer.FilmReducer)
    const dispatch = useDispatch();
    //props.match.params => Dùng để lấy tham số từ url của trình duyệt (query params)
    useEffect(()=>{
        //Lấy ra tham số
        let maPhim = props.match.params.id;
        //Tạo ra action chi tiết phim. Gọi action thực thi trả về function 
        let action = layThongTinChiTietPhimAction(maPhim);
        dispatch(action);
    }, [])

    console.log(props)

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-4">
                    <img className="w-100" src={chiTietPhim.hinhAnh} alt="..." />
                </div>
            </div>
        </div>
    )
}
