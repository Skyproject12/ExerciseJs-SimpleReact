import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from './Cardproduct/CardProduct';
import { connect } from 'react-redux';  
// memanggil global consumer 
import {GlobalConsumer} from '../../../context/context';

class Product extends Component {

    // ketika terdapat perubahan maka di a akan melakukan render 
    // ulang state yang terdapat di dalam component  
    // jika menggunakan variable biasa maka akan error karena variable biasa tidak dapat di definisikan dalam class 
    // state = {
    //     order: 4
    // }

    // melakukan set ulang counter  berdasarkan value yang diterima dari cardProduct 
    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        // call state global 
        return (
            <Fragment>
                <p className="title_home">Counter</p>
                <p className="desc_home">Count of your order</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://image.flaticon.com/icons/svg/25/25231.svg" />
                    </div>
                    <div className="troley">
                        <img src="https://pngimage.net/wp-content/uploads/2018/06/shopping-trolley-png-1.png" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                {/* melakukan setState dari value berdarakan value cardProduct  */}
                {/* new value yang di terima akan menginisilalisasi method handleCounterChange  */}
                {/* melakuak an request props dengan nama onCounterChange dan didalamnya terdapat value new value  */}
                {/* <CardProduct onCounterChange={(newValue) => this.handleCounterChange(newValue)} /> */}
                <CardProduct />
            </Fragment>
        )
    }
}

// mengambil state global lalu di ubah menjadi props 
const mapStateToProps = (state) => {
    // mengambil totalOrder dari state global 
    return {
        // mengubah total order menjadi order 
        order: state.totalOrder
    }
}

// export default connect(mapStateToProps)(Product); 
// melakukan hoc pada global consumer dengan produk
export default GlobalConsumer(Product);