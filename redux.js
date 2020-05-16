const redux = require('redux'); 
const createStore = redux.createStore;

// membuat state berupa object secara global  
const initialState = { 
    value: 0, 
    age: 17
}

// reducer 
// membuat state secara global 
// ketika state updifine atau belum di initial maka auto matis akan menjalanakan iniitial state 
const rootReducer = (state = initialState, action)=>{ 
    return state;
}

// make store redux 
// store 
// memanggil reduxer yang digunakan 
const store = createStore(rootReducer); 
console.log(store.getState());

// Dispaching Action 

// subscription 