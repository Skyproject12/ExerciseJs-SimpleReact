import axios from 'axios'; 

// make default url 
const RootPath='http://localhost:3004'; 
const OnlineRoot = 'https://jsonplaceholder.typicode.com';

// make global api
const Get = (path, root) =>  {
    const promise = new Promise((resolve, reject) => {
        // melakukan pengurutan data berdasarkan id secara terbalik  
        axios.get(`${root ? OnlineRoot : RootPath}/${path}`) 
            // jika root bernilai true maka gunakan OnlineRoot dan jika false maka gunakan RootPath 
            .then((result) => { 
                // ketika data berhasil di request maka kembalikan nilai resolve   
                resolve(result.data);
            }, (err) =>{ 
                // ketika data gagal maka berikan nilai error  
                reject(err);
            })
    }) 
    return promise;
}

// data merupakan inputan dari pengguna ketika akan melakukan post user 
const getNewsBlog = (data) => Get('posts?_sort=id&_order=desc', false);  
// true berfungsi untuk mengecek apakah akan menggunakan onlineRoot atau tidak 
const getComment = (data) => Get('comments', true); 

// membuat function global untuk menampung suatu request 
const API = {  
    // melakukan request blog 
    getNewsBlog, 
    getComment
}

// export global api 

export default API;