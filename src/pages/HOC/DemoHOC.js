import React, { useState } from 'react'
import Modal from './Modal'
import FormReact from '../FormReact/FormReact';
import Home from '../Home/Home';
//HOC: Higher order component : Là 1 component nhận vào 1 tham số là 1 component => Tạo ra 1 component mới

export default function DemoHOC(props) {

    const [state,setState] = useState(null);

    const handleOpenForm = (Component) => {
        setState(Component);
    }
    return (
        <div>
             <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId" onClick={()=>{
                 handleOpenForm(<FormReact />)
             }}>
                Open modal Form Register
            </button>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId" onClick={()=>{
                 handleOpenForm(<Home />)
            }}>
                Open Modal Home
            </button>

            <Modal title="cybersoft" body={state} />
        </div>
    )
}
