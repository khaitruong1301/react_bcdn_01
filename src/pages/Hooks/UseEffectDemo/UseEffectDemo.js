import React, { useEffect, useState } from 'react'

export default function UseEffectDemo(props) {

    const [number, setNumber] = useState(1);
    const [like, setLike] = useState(1);

    // useEffect(()=> {
    //     //UseEffect nhận vào tham số là 1 callback function thì thay thế 2 lifecycle : didmount và didupdate 
    //     //Hàm callback sẽ chạy sau khi giao diện render hoặc sau mỗi lần cập nhật state hoặc props
    //     console.log('didmount && didupdate')
    // });

    // useEffect(()=>{
    //     console.log('didmount');
    // },[])
    // useEffect(() => {
    //     console.log('did update');
    // }, [like])

    useEffect(()=>{
        //Có thể định nghĩa trong bất kỳ useEffect nào
        return () => {
            // Hàm này sẽ gọi trước khi component biến mất khỏi giao diện (willunmount)
            console.log('will unmount');
        }
    },[])


    console.log('render');

    return (
        <div>
            useEffect demo
            <h1>{number}</h1>
            <button className="btn btn-outline-danger" onClick={() => {
                setNumber(number + 1);
            }}>+</button>
            <br />
            <br />
            <h1>{like}</h1>
            <button className="btn btn-danger" onClick={() => {
                setLike(like + 1)
            }}>Like</button>

        </div>
    )
}
