import React, { useState } from 'react'
import BaiTapChonXe from './BaiTapChonXe';

export default function UseStateDemo(props) {

    // let [state,setState] = useState(1); // arr[state_default,setState()]  = useState(gia_tri_state_default)
    //this.state = { like:1 }
    let [state, setState] = useState({
        like: 1
    })
    // const [like,setLike] = useState(1);

    return (
        <div className="container">
            <div className="card w-25 mt-2">
                <img src="https://i.pravatar.cc/300" alt="..." />
                <div className="card-body">
                    <p>{state.like} ♥ Like </p>
                    <button className="btn btn-danger" onClick={() => {
                        //this.setState({like: this.state.like + 1})
                        setState({ like: state.like + 1 });
                    }}>Like</button>
                </div>
            </div>
            <hr />
            <h3 className="mt-2">Bài tập chọn xe</h3>
            <BaiTapChonXe />

        </div>
    )
}

// import React, { Component } from 'react'

// export default class UseStateDemo extends Component {

//     state = {

//     }


//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }


