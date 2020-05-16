import React, { Component } from 'react';
// connect merupakan suatu hoc yang akan di panggil di export 
import { connect } from 'react-redux';
import ActionType from '../../../../redux/reducer/globalActionType';
// melakukan import rootContext yang berasal dari home  
import { RootContext } from '../../../Home/Home';

class Counter extends Component {

    // ketika terdapat perubahan maka di a akan melakukan render 
    // ulang state yang terdapat di dalam component  
    // jika menggunakan variable biasa maka akan error karena variable biasa tidak dapat di definisikan dalam class 
    // state = {
    //     order: 4
    // }

    // memberi nilai dari props yang di terima dari product 
    // handleCounterChange = (newState) => {
    //     this.props.onCounterChange(newState);
    // }

    // handlePluss = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         // ketika klik button maka menjalanakan fungsi handleCounterChange(); 
    //         // mengambil nilai setelah melakukan perubahan data 
    //         // menginisialisasi state baru lalu mengirim data ke method handleCounterChange
    //         this.handleCounterChange(this.state.order);
    //     })
    // }

    // ketika melakukan klik button android 
    // handleMinus = () => {
    //     if (this.state.order == 0) {
    //         return;
    //     }
    //     // ketik set state di order  
    //     this.setState({
    //         order: this.state.order - 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })

    // }

    render() {
        return (
            // menginisialisasi context agar dapat memanggil props global 
            <RootContext.Consumer>
                {/* memanggil value dari context global  */}
                {
                    value => { 
                        {/* membuat counter menjadi component tersendiri   */ }
                        return (
                            <div className="counter">
                                <center>
                                    {/* onclick berdasarkan handleminus dari state global  */}
                                    <button className="minus" onClick={()=>value.dispatch({type:'MINUS_ORDER'})}>-</button>
                                    {/* context value global  */}
                                    <input type="text" value={value.state.totalOrder}></input>
                                    <button className="plus" onClick={()=>value.dispatch({type:'PLUSS_ORDER'})}>+</button>
                                </center>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}



// // mengambil state global lalu di ubah menjadi props 
// const mapStateToProps = (state) =>{  
//     // mengambil totalOrder dari state global 
//     return {  
//         // mengubah total order menjadi order 
//         order: state.totalOrder
//     }
// }

// // membuat dispatch 
// // fungsi merubah nilai 
// const mapDispatchToProps = (dispatch)=>{ 
//     return { 
//         handlePluss: ()=> dispatch({type: ActionType.PLUSS_ORDER}), 
//         handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
//     }
// }

// params pertama dari connect adalah state global, yang kedua adalah dispatch dari redux 
// connect component dengan redux
// maka props global yang di inisilisasi akan di panggil 
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;