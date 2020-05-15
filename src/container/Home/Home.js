import React, { Component, Fragment } from 'react';
import Product from '../pages/Product/Product';
import './Home.css';
import LifeCycle from '../pages/LifeCrycle/LifeCycle';
import BlogPost from '../pages/BlogPost/BlogPost';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import YoutubePage from '../pages/Youtube/YoutubePage';

class Home extends Component {
    state = {
        showComponent: true
    }

    // melakuakan destroy data setelah 15 detik 
    componentDidMount() {
        // setTimeout(()=>{ 
        //     this.setState({ 
        //         showComponent: false
        //     })
        // },15000); 
        return true;
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* when learn props  */}
                    {/* <p className="title_home">Youtube Bola </p>
                    <p className="desc_home">make all component in here</p>

                    <Youtube
                        time="07.12"
                        title="Chelsea"
                        desc="club liga inggris terbaik"
                        image="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/314px-Chelsea_FC.svg.png" />
                    <Youtube
                        time="08.12"
                        title="Manchester United"
                        desc="club liga inggris terpopuler"
                        image="https://upload.wikimedia.org/wikipedia/id/thumb/7/7a/Manchester_United_FC_crest.svg/330px-Manchester_United_FC_crest.svg.png" />
                    <Youtube
                        time="07.26"
                        title="Real Madrid"
                        desc="club laliga terbaik"
                        image="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/195px-Real_Madrid_CF.svg.png" />
                    <Youtube
                        time="05.12"
                        title="Barcelona"
                        desc="club laliga terpopuler"
                        image="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/270px-FC_Barcelona_%28crest%29.svg.png" />
                    <Youtube
                        title="Bayern Munchen"
                        desc="club liga Jerman terbaik dan terpopuler"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/270px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png" /> */}
                    {/* learn setState      */}
                    {/* <p className="title_home">Counter</p>
                    <p className="desc_home">Count of your order</p>
                    <hr />
                    <Product /> */}
                    {/* learn lifecrycle   */}
                    {/* <p className="title_home">LifeCycle</p>
                    <hr />
                    {this.state.showComponent ?
                        <LifeCycle /> : null
                    } */}
                    {/* learn request api  */}
                    {/* <p className="title_home">Blog Post</p>
                    <hr />
                    <BlogPost /> */}
                </div>
                <Fragment> 
                    <div className="navigation"> 
                        <Link to="/">BlogPoast</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/youtube">Youtube</Link>
                    </div>
                    {/* ketika kita link ke suatu patch maka akan mengubah tampilan  */} 
                    {/* menggunakan exact ketika terdapat garis miring , membuat blogpost hanya akan muncul ketika di patch hanya / , tidak /product   */}
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycle} />
                    <Route path="/youtube" component={YoutubePage} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;