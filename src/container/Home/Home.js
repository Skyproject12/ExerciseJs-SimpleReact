import React, { Component } from 'react';
// import Youtube from '../../component/Youtube/Youtube'; 
// import Product from '../Product/Product'; 
import './Home.css';
import LifeCycle from '../LifeCrycle/LifeCycle';

class Home extends Component { 
    state = { 
        showComponent: true
    } 

    // melakuakan destroy data setelah 15 detik 
    componentDidMount(){ 
        // setTimeout(()=>{ 
        //     this.setState({ 
        //         showComponent: false
        //     })
        // },15000); 
        return true;
    }
    render() {
        return (
            <div>
                {/* <p className="title_home">Youtube Bola </p> 
                <p className="desc_home">make all component in here</p> 
               
                <Youtube 
                    time="07.12" 
                    title="Chelsea" 
                    desc="club liga inggris terbaik" 
                    image="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/314px-Chelsea_FC.svg.png"/>
                <Youtube 
                    time="08.12" 
                    title="Manchester United" 
                    desc="club liga inggris terpopuler" 
                    image="https://upload.wikimedia.org/wikipedia/id/thumb/7/7a/Manchester_United_FC_crest.svg/330px-Manchester_United_FC_crest.svg.png"/>
                <Youtube 
                    time="07.26" 
                    title="Real Madrid" 
                    desc="club laliga terbaik" 
                    image="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/195px-Real_Madrid_CF.svg.png"/>
                <Youtube 
                    time="05.12" 
                    title="Barcelona" 
                    desc="club laliga terpopuler" 
                    image="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/270px-FC_Barcelona_%28crest%29.svg.png"/>
                <Youtube 
                    title="Bayern Munchen" 
                    desc="club liga Jerman terbaik dan terpopuler" 
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/270px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"/> 
                <p className="title_home">Counter</p>
                <p className="desc_home">Count of your order</p>
                <hr/> 
                <Product/> */} 
                <p className="title_home">LifeCycle</p> 
                <hr/>  
                {this.state.showComponent ?
                     <LifeCycle/> : null
                }
               
            </div>
        )
    }
}

export default Home;