import React, { Component } from 'react';  
// connect merupakan suatu hoc yang akan di panggil di export 
import {connect} from 'react-redux';
class Counter extends Component {

    // ketika terdapat perubahan maka di a akan melakukan render 
    // ulang state yang terdapat di dalam component  
    // jika menggunakan variable biasa maka akan error karena variable biasa tidak dapat di definisikan dalam class 
    // state = {
    //     order: 4
    // }

    // memberi nilai dari props yang di terima dari product 
    handleCounterChange = (newState) => {
        this.props.onCounterChange(newState);
    }

    handlePluss = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            // ketika klik button maka menjalanakan fungsi handleCounterChange(); 
            // mengambil nilai setelah melakukan perubahan data 
            // menginisialisasi state baru lalu mengirim data ke method handleCounterChange
            this.handleCounterChange(this.state.order);
        })
    }

    // ketika melakukan klik button android 
    handleMinus = () => {
        if (this.state.order == 0) {
            return;
        }
        // ketik set state di order  
        this.setState({
            order: this.state.order - 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })

    }

    render() { 
        console.log(this.props);
        return ( 
            // membuat counter menjadi component tersendiri  
            <div className="counter">
                <center>
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    {/* make default value 3 */} 
                    {/* redux value global  */}
                    <input type="text" value={this.props.order}></input>
                    <button className="plus" onClick={this.handlePluss}>+</button>
                </center>
            </div>
        )
    }
}

// mengambil state global lalu di ubah menjadi props 
const mapStateToProps = (state) =>{  
    // mengambil totalOrder dari state global 
    return {  
        // mengubah total order menjadi order 
        order: state.totalOrder
    }
}

// params pertama dari connect adalah state global, yang kedua adalah dispatch dari redux 
// connect component dengan redux
// maka props global yang di inisilisasi akan di panggil 
export default connect(mapStateToProps)(Counter);