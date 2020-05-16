import React, { Component, Fragment } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Roast_chicken.jpg/330px-Roast_chicken.jpg" />
                    </div>
                    <h1 className="product-title">Daging Ayam Sumedang</h1>
                    <p className="product-price">Rp.34.000,00</p>  
                    {/* counter dapat di jadikan component lagi agar nanti ketika di butuhkan dapat di panggil di lain operasi  */} 
                    {/* mengirim props dari onclick counter serta data yang value yang di bawa dari counter  */}
                    <Counter onCounterChange={(value)=> this.props.onCounterChange(value)}/>
                </div>
            </Fragment>
        )
    }
}

export default CardProduct;