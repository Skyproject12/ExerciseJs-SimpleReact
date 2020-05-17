import Get from './Get'; 
import Post from './Post';

// data merupakan inputan dari pengguna ketika akan melakukan post user 
const getNewsBlog = (data) => Get('posts?_sort=id&_order=desc', false);  
// true berfungsi untuk mengecek apakah akan menggunakan onlineRoot atau tidak 
const getComment = (data) => Get('comments', true); 

// POST 
// post data newsblog 
// data merupakan parameter yang diinputkan pengguna 
const postNewsBlog = (data) => Post(`posts`, false, data);


// membuat function global untuk menampung suatu request 
const API = {  
    // melakukan request blog 
    getNewsBlog, 
    getComment, 
    postNewsBlog
}

// export global api 

export default API;