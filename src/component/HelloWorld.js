import React from 'react'; 
import './HelloWorld.css';

// membuat componnet helloworld 
// merupkan suatu stateless componnet  
// tanpa render 
const HelloWorld = () => { 
    return <p className="text-p">Hello World</p>
}

//melakukan export  
// dipanggil ketika dibutuhkan oleh kelas lain 
export default HelloWorld;