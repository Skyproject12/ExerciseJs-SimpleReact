import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }

     // melakukan get api 
     getPostApi = () =>{ 
        axios.get('http://localhost:3004/posts')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    // menjalankan get api  
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(Json => {
        //         this.setState({
        //             post: Json
        //         })
        //     }) 
        // melakukan fetch dengan axios  
        this.getPostApi();
    }

    // melakukan remove handle 
    handleRemove = (data) => { 
        // axios.delete(`http://localhost:3004/posts/${data}`).then((res)=> { 
        //     console.log(res); 
        //     this.getPostApi();
        // })  
        console.log(data);
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {/* map berfungsi menggulang data sebanyak jumlah data lalu mereturn object post  */}
                {this.state.post.map(post => { 
                    // menampung id berserta remove ketika di kirim props  
                    return <Post key={post.id} data={post} remove={(idRemove)=>this.handleRemove(idRemove)}/>
                })}
            </Fragment>
        );
    }
}

export default BlogPost;