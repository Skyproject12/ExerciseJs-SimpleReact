import React, { Component, useState } from 'react';
import './Hook.css'; 

// class Hook extends Component {

//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return (
//             <div className="p-hook">
//                 <p>Nilai Saya saat ini adalah : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hook = () => {
    // pada hook ini count merupakan state dan setCount merupakan function yang mengupdate state 
    const [count, setCount] = useState(0);
    return (
        <div className="p-hook">
            <p>Nilai Saya saat ini adalah : {count}</p> 
            {/* untuk mengambil dan mengubah count sebelumnya dengan hook dapat dilakukan sebagai berikut  */}
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hook;