import React, { Fragment, useEffect, useState } from 'react'
import { Route ,Switch} from 'react-router-dom'
import Header from '../../components/Header/Header'




export default function HomeTemplate (props) { // path, component, mobileComponent
    //Lấy kích thước màn hình browser trên thiết bị
    const [state,setState] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    console.log('state',state)
    useEffect(()=>{ 
        //Khi browser load lên đăng ký 1 event onload
        window.onload = () => {
            setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        //Khi người dùng thay đổi kích thước cửa sổ
        window.onresize = () => {
            setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        return () => {
            window.removeEventListener('onload');
            window.removeEventListener('onresize');
        }
    },[])

    let Component = props.component;
    if(state.width <= 768 && props.mobileComponent) {
        Component = props.mobileComponent;
    }


    return <>
        <Route exact path={props.path} render={(propsRoute)=> {
            return <Fragment> 
                <Header />
                <Component {...propsRoute}/>
            </Fragment>
        }} />
    </>
}