import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home';
// import create store 
// import {createStore} from 'redux'; 
// penyedia store global  
// import {Provider} from 'react-redux'; 
// import rootReducer from './redux/reducer/globalReducer';

// 2. store
// const storeRedux = createStore(rootReducer);

// melakukan render compoennt 
ReactDOM.render(
  // tempat inisial store 
  //  <Provider store={storeRedux}>
  //     <Home/>
  //  </Provider> , 
    <Home />,
  document.getElementById('root')
);

serviceWorker.unregister();
