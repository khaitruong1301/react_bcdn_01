import React, { Fragment } from 'react'
import { Route } from 'react-router'

export default function UserTemplate(props) {

    //props : path , component
    //HOC: higher order component
    return (
        <div className="w-100">
            <Route exact path={props.path} render={(propsRoute)=>{

                return <Fragment>
                    <div className="row">
                        <div className="m-0 p-0 col-6">
                            <img className="w-100" src="https://picsum.photos/2000" style={{height:'100vh'}} alt="..."/>
                        </div>
                        <div className="m-0 p-0 col-6">
                            <props.component {...propsRoute} />
                        </div>
                    </div>
                </Fragment>
            }} />
        </div>
    )
}
