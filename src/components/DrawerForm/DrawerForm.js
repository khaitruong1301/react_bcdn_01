import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

export default function DrawerForm() {
    // const [visible, setVisible] = useState(false);

    const {visible,BodyComponent,title,callbackSubmit} = useSelector( rootReducer => rootReducer.DrawerReducer);

    const dispatch = useDispatch();
    
    const [size, setSize] = useState();

  

    const onClose = () => {
        // setVisible(false);
        dispatch({
            type:'HIDE_DRAWER'
        })
    };

    return (
        <div>
            {/* <Space>
                <Button type="primary" onClick={showDefaultDrawer}>
                    Open Default Size (378px)
                </Button>
                <Button type="primary" onClick={showLargeDrawer}>
                    Open Large Size (736px)
                </Button>
            </Space> */}
            <Drawer
                title={`${title}`}
                placement="right"
                size={size}
                width={768}
                onClose={onClose}
                visible={visible}
                footer={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={callbackSubmit}>
                            OK
                        </Button>
                    </Space>
                }
            >
              
                {BodyComponent}
            </Drawer>
        </div>
    )
}
