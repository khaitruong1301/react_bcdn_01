import React,{useState} from 'react'

// const arrCar = ['./',''] 

export default function BaiTapChonXe(props) {

    const [imgColor,setImgColor] = useState('./img/products/black-car.jpg');

    const changeColor = (color) => {
        setImgColor(`./img/products/${color}-car.jpg`);
    } 

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <button onClick={()=>{
                        changeColor('black')
                    }} style={{backgroundColor:'#000',color:'#fff'}} className="btn">Black</button>
                    <button onClick={()=>{
                        changeColor('red')
                    }} style={{backgroundColor:'red',color:'#fff'}} className="btn">Red</button>
                    <button onClick={()=>{
                        changeColor('silver')
                    }} style={{backgroundColor:'silver',color:'#fff'}} className="btn">Silver</button>
                    <button onClick={()=>{
                        changeColor('steel')
                    }} style={{backgroundColor:'gray',color:'#fff'}} className="btn">Steel</button>
                </div>
                <div className="col-6">
                    <img className="w-100" src={imgColor} alt="..." />
                </div>
            </div>
        </div>
    )
}
