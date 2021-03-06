import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CarouselHome from '../../components/CarouselHome/CarouselHome';
import { layDanhSachPhimAction } from '../../redux/actions/FilmActions';


export default function Home(props) {
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
            return <div className="col-4 mt-2" key={index}>
                <div className="card">
                    <img src={phim.hinhAnh} alt='...' height={300} />
                    <div className="card-body">
                        <p style={{height:50}}>{phim.tenPhim}</p>
                        <p style={{height:75}}>{phim.moTa.length>100 ? phim.moTa.substr(0,100) +' ...' : phim.moTa}</p>
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
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
