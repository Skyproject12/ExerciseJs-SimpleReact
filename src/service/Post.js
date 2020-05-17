import axios from 'axios'; 
import {OnlineRoot} from './Config'; 
import {RootPath} from './Config'; 

// melakukan post global  
// data menampung inputan pengguna 
// path menampung url 
const Post = (path, root, data) => { 
    const promise = new Promise((resolve, reject)=>{ 
        axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then((res) => {
            // ketika sudah berhasil melakukan insert maka render get api kembali 
            resolve(res);
        }, (err)=>{ 
            reject(err);
        });
    }) 
    return promise;
}

export default Post;