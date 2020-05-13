import React, { Fragment } from 'react';
import '../../container/BlogPost/BlogPost.css'; 

const Post = (props) => {
    return (
        <Fragment>
            <div className="section-blog">
                <div className="img-thumb">
                    <img src="http://placeimg.com/200/150/tech" />
                </div>
                <div className="content">
                    <p className="title">{props.data.title}</p>
                    <p className="desc">{props.data.body}</p> 
                </div> 
                   <button className="remove" onClick={console.log("klik")}>Remove</button>
            </div>
        </Fragment>
    );

}

export default Post;