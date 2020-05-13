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
                    <p className="title">{props.title}</p>
                    <p className="desc">{props.desc}</p>
                </div>
            </div>
        </Fragment>
    );

}

export default Post;