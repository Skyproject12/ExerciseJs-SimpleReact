import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../../component/Post/Post';
import axios from 'axios';
import API from '../../../service';

class BlogPost extends Component {

    state = {
        post: [],
        // formBlogPost berfungsi untuk menampungd data form  
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false, 
        // menampung list comment 
        comments: []
    }

    // melakukan get api 
    getPostApi = () => {
        // melakukan pengambilan data secara global 
        API.getNewsBlog().then(res => {
            // mengambil res request 
            this.setState({
                post: res
            })
        })
        // melakukan pengurutan data berdasarkan id secara terbalik  
        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        //     .then((res) => {
        //         this.setState({
        //             post: res.data
        //         })
        //     }) 
        API.getComment().then(comment =>{ 
            this.setState({ 
                comments: comment
            })
        })
    }

    // melakukan handle ketika form berubah  
    // ketika telah melakukan onChange maka akan mendapatkan suatu event 
    handleFormChange = (event) => {
        // melakukan copy data dari formBlogPost
        let formBlogPostNew = { ...this.state.formBlogPost };
        // membuat time stimp untuk id dari pengguna 
        let timestamp = new Date().getTime();
        // jika melakukan update jangan inputkan id baru 
        if (!this.state.isUpdate) {
            formBlogPostNew["id"] = timestamp;
        }
        // melakukan perubahan hanya pada name dari suatu inputan   
        // menampung value dari form input  
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    // melakukan handle ketika submit
    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToApi();
        }
        else {
            this.postDataToApi();
        }
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

    // melakukan post ke api 
    postDataToApi = () => { 
        // membuat fungsi post menjdi global 
        API.postNewsBlog(this.state.formBlogPost).then((res)=>{ 
            // ketika sudah berhasil melakukan insert maka render get api kembali 
            this.getPostApi();
            // menghapus form ketika sudah update 
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
        // axios.post(`http://localhost:3004/posts/`, this.state.formBlogPost).then((result) => {
        //     // ketika sudah berhasil melakukan insert maka render get api kembali 
        //     this.getPostApi();
        //     // menghapus form ketika sudah update 
        //     this.setState({
        //         formBlogPost: {
        //             id: 1,
        //             title: '',
        //             body: '',
        //             userId: 1
        //         },
        //     })
        // });
    }

    // melakukan remove handle 
    handleRemove = (data) => { 
        API.deleteNewsBlog(data).then((res)=>{ 
            this.getPostApi();
        })
        // axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
        //     this.getPostApi();
        // })
    }

    putDataToApi = () => { 
        API.putNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((res)=>{ 
            this.getPostApi();
            // ketika sudah selesai mengupdate maka ubah status menjadi false 
            // lalu set form kembali kosong
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
        // axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
        //     this.getPostApi();
        //     // ketika sudah selesai mengupdate maka ubah status menjadi false 
        //     // lalu set form kembali kosong
        //     this.setState({
        //         isUpdate: false,
        //         formBlogPost: {
        //             id: 1,
        //             title: '',
        //             body: '',
        //             userId: 1
        //         },
        //     })
        // })
    }

    // melakukan udpate data  
    // data di terima dari post page yang mengirim data sambil melakukan props 
    handleUpdate = (data) => {
        // menampilkan di form data yang ingin kita update  
        // membuat status update true
        this.setState({
            formBlogPost: data,
            isUpdate: true
        });
    }

    // melakukan perpindahan berdasarkan id post 
    handleDetail = (id) => {
        // melakukan pindah halaman 
        this.props.history.push(`/detail-post/${id}`)
    }

    render() {
        return (
            <Fragment>
                <p className="title_home">Blog Post</p>
                <p className="desc_home">Blog Post</p>
                <hr />
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body" id="body" >Blog Content</label>
                    {/* onChange berfungsi melakukan perubahan ketika di bagian text area di ketikkan sesuatu  */}
                    {/* beri nama name sesuai dengan formBlogPost agar perubahan sesuai  */}
                    {/* memberi value default untuk melakuakan update  */}
                    <textarea value={this.state.formBlogPost.body} name="body" id="body" color="30" rows="10" placeholder="add content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div> 
                {/* melakukan map untuk mengulang data comment dari api  dan membentuk array baru  */}
                {/* {this.state.comments.map(comment => {
                    return <p>{comment.name}</p>
                })
                } */}
                {/* map berfungsi menggulang data sebanyak jumlah data lalu mereturn object post  */}
                {this.state.post.map(post => {
                    // menampung id berserta remove ketika di kirim props   
                    // menampung remove props untuk di jalankan di sini 
                    return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                })}
            </Fragment>
        );
    }
}

export default BlogPost;