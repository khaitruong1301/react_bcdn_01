import React, { Fragment } from 'react'
import { Route ,Switch} from 'react-router-dom'
import Header from '../../components/Header/Header'




export default function HomeTemplate (props) { // path, component

    


    return <>
        <Route exact path={props.path} render={(propsRoute)=> {
            return <Fragment> 
                <Header />
                <props.component {...propsRoute}/>
            </Fragment>
        }} />
    </>
}