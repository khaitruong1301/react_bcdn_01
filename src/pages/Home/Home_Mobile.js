import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CarouselHome from '../../components/CarouselHome/CarouselHome';
import { layDanhSachPhimAction } from '../../redux/actions/FilmActions';

export default function Home_Mobile(props) {
    //Lấy thông tin mangPhim từ FilmReducer về component
    const mangPhim = useSelector(rootReducer => rootReducer.FilmReducer.mangPhim);

    //Tạo ra hàm dispatch 
    const dispatch = useDispatch();

    useEffect(() => {
        //Tạo ra action là function
        const action = layDanhSachPhimAction;
        //Dispatch thực thi action
        dispatch(action);

    }, []);

    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="row mt-2" key={index}>
                <div className="col-4">
                    <img className="w-100" height="" src={phim.hinhAnh} alt='...' />
                </div>
                <div className="col-8">
                    <p>{phim.tenPhim}</p>
                    <p>{phim.moTa}</p>
                    <div class="text-right">
                        <NavLink to={`/detail/${phim.maPhim}`} className="btn btn-success">Xem chi tiết</NavLink>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className="container">
            <CarouselHome />
            <h1>Danh sách phim</h1>
            {renderPhim()}
        </div>
    )
}
