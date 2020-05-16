import React, { Component, Fragment } from 'react';
import './LifeCycle.css';
import { connect } from 'react-redux';

// ketika pertama kali di load  
// 1. constructor  
// 2. getDerivedStateFromProps  
// 3. render   
// 4. componentDidMount  

//ketika update 
// 1. getDerivedStateFromProps  
// 2. shouldComponentUpdate  
// 3. render  
// 4. getSnapshotBeforeUpdate  
// 5. componentDidUpdate

// ketika component di cabut 
// 1. componentWillMount

class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('drived');
        return null;
    }

    // melakukan update data sangat cocok dilakukan di didmount  
    // karena jika sudah muncul di browser 
    // update state tersebut 
    componentDidMount() {
        console.log('didmount');
        // setTimeout(()=>{ 
        //     this.setState({ 
        //         count:2
        //     })
        // }, 5000);
    }

    // lakukan return true untuk mengupdate  
    // disini tempat memastikan apakah state harus di update 
    shouldComponentUpdate(nextProps, nextState) {
        console.group('sholdComponentUpdate');
        // menangkap hasil state selanjutnya
        console.log('nextState', nextState);
        // nenangkap state yang sekarang dan belum di update 
        console.log('this state', this.state);
        console.groupEnd();
        // jika state selanjutnya memiliki nilai 4 maka jangan melakukan update  
        if (nextState.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('before update');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update');
        return null;
    }
    componentWillMount() {
        console.log('will mount');
    }

    // melakukan perubahan tersebut 
    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render');
        return (
            <Fragment>
                <p className="title_home">LifeCycle</p>
                <hr />
                {/* melakukan perubahan ketika di klik  */}
                <button className="btn" onClick={this.changeCount}>Compoennt Button {this.state.count}</button>
                <hr />
                <p>Total Order : {this.props.order}</p>
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

export default connect(mapStateToProps)(LifeCycle);