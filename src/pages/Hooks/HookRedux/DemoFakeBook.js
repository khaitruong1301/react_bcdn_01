import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';

export default function DemoFakeBook(props) {

    const [userContent, setUserContent] = useState({ name: '', content: '' })

    //dispatch thay thế cho this.props.dispatch hoặc mapdispatchtoprops
    const dispatch = useDispatch();

    //useSelector giống mapStateToProps của redux => Lấy dữ liệu từ store về
    const arrContent = useSelector((rootReducer) => rootReducer.FakeBookReducer);
    console.log('userContent', userContent);


    const handleChange = (event) => {
        let { name, value } = event.target;

        //Phải có bước lưu lại giá trị cũ
        // this.setState({
        //     [name]:value
        // })
        setUserContent({
            ...userContent,
            [name]: value
        });
    }

    const handleSubmit = async  (event) => {
        event.preventDefault();//Cản sự kiện submit của browser

        const action = {
            type:'COMMENT',
            userContent
        }

        await dispatch(action);

        setUserContent({
            name:'',
            content:''
        })

    }




    const renderContent = () => {
        return arrContent.map((userContent, index) => {
            return <div className="row" key={index}>
                <div className="col-2">
                    <img src={`https://i.pravatar.cc/150?u=${userContent.name}`} alt="..." width={50} height={50} />
                </div>
                <div className="col-10">
                    <p className="font-weight-bold text-danger">{userContent.name}</p>
                    <p>{userContent.content}</p>
                </div>
            </div>
        })
    }
    console.log('arrContent', arrContent)
    // console.log('props',props);
    return (
        <div className="container mt-2">
            <div className="card">
                <div className="card-header">
                    {renderContent()}
                </div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-group">
                        <p>Name</p>
                        <input onChange={handleChange} name="name" className="form-control" value={userContent.name} />
                    </div>
                    <div className="form-group">
                        <p>Content</p>
                        <input onChange={handleChange} name="content" className="form-control" value={userContent.content}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



// const mapStateToProps = (rootReducer) => {
//     return {
//         arrContent: rootReducer.FakeBookReducer
//     }
// }


// export default connect(mapStateToProps)(DemoFakeBook);