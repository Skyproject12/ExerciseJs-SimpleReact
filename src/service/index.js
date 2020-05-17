import Get from './Get'; 
import Post from './Post'; 
import Put from './Put';
import Delete from './Delete';

// data merupakan inputan dari pengguna ketika akan melakukan post user 
const getNewsBlog = (data) => Get('posts?_sort=id&_order=desc', false);  
// true berfungsi untuk mengecek apakah akan menggunakan onlineRoot atau tidak 
const getComment = (data) => Get('comments', true); 

// POST 
// post data newsblog 
// data merupakan parameter yang diinputkan pengguna 
const postNewsBlog = (data) => Post(`posts`, false, data);

// PUT 
const putNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

// DELETE 
const deleteNewsBlog = (id) => Delete(`posts/${id}`,false); 

// membuat function global untuk menampung suatu request 
const API = {  
    // melakukan request blog 
    getNewsBlog, 
    getComment, 
    postNewsBlog, 
    putNewsBlog, 
    deleteNewsBlog
}

// export global api 

export default API;