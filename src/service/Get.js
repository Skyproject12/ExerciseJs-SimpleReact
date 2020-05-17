import axios from 'axios'; 
import {OnlineRoot} from './Config'; 
import {RootPath} from './Config'; 

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

export default Get;