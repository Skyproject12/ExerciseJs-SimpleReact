import React from 'react';
import './Youtube.css';

const Youtube = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={props.image} />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}
// membuat default dari props 
Youtube.defaultProps = { 
    time:'00.00'
}

export default Youtube;