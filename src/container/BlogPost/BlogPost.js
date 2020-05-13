import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(Json => {
        //         this.setState({
        //             post: Json
        //         })
        //     }) 
        // melakukan fetch dengan axios 
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {/* map berfungsi menggulang data sebanyak jumlah data lalu mereturn object post  */}
                {this.state.post.map(post => {
                    return <Post key={post.id} title={post.title} desc={post.body} />
                })}
            </Fragment>
        );
    }
}

export default BlogPost;