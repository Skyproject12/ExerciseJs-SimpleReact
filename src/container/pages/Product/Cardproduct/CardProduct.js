import React, { Component, Fragment } from 'react';

class CardProduct extends Component {

    // ketika terdapat perubahan maka di a akan melakukan render 
    // ulang state yang terdapat di dalam component  
    // jika menggunakan variable biasa maka akan error karena variable biasa tidak dapat di definisikan dalam class 
    state = {
        order: 4
    }

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
        },()=>{ 
            this.handleCounterChange(this.state.order);
        })
        
    }

    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Roast_chicken.jpg/330px-Roast_chicken.jpg" />
                    </div>
                    <h1 className="product-title">Daging Ayam Sumedang</h1>
                    <p className="product-price">Rp.34.000,00</p>
                    <div className="counter">
                        <center>
                            <button className="minus" onClick={this.handleMinus}>-</button>
                            {/* make default value 3 */}
                            <input type="text" value={this.state.order}></input>
                            <button className="plus" onClick={this.handlePluss}>+</button>
                        </center>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CardProduct;