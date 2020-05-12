import React, { Component } from 'react'; 
import './LifeCycle.css';

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

class LifeCycle extends Component { 

    constructor(props){ 
        super(props); 
        this.state ={ 
            count:1
        } 
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state){ 
        console.log('drived'); 
        return null;
    }

    // melakukan update data sangat cocok dilakukan di didmount  
    // karena jika sudah muncul di browser 
    // update state tersebut 
    componentDidMount(){ 
        console.log('didmount');  
        setTimeout(()=>{ 
            this.setState({ 
                count:2
            })
        }, 3000);
    }

    // lakukan return true untuk mengupdate  
    // disini tempat memastikan apakah state harus di update 
    shouldComponentUpdate(nextProps, nextState){ 
        console.log('should update'); 
        return true; 
    }

    getSnapshotBeforeUpdate(prevProps, prevState){ 
        console.log('before update');
    }

    componentDidUpdate(prevProps, prevState, snapshot){ 
        console.log('did update');
    }
    componentWillMount(){ 
        console.log('will mount');
    }

    render(){ 
        console.log('render');
        return ( 
        <button className="btn">Compoennt Button {this.state.count}</button>
        )
    }
}

export default LifeCycle;