import React from 'react'
import { Carousel } from 'antd';

export default function CarouselHome() {
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        
    };
    return (
        <div>
            <Carousel afterChange={onChange}>
                <div>
                    <img style={contentStyle} src="https://picsum.photos/id/1/2000" className="w-100" />
                </div>
                <div>
                <img style={contentStyle} src="https://picsum.photos/id/2/2000" className="w-100" />
                </div>
                <div>
                <img style={contentStyle} src="https://picsum.photos/id/3/2000" className="w-100" />
                </div>
                <div>
                <img style={contentStyle} src="https://picsum.photos/id/4/2000" className="w-100" />
                </div>
            </Carousel>
        </div>
    )
}
