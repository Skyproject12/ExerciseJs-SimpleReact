const redux = require('redux');
const createStore = redux.createStore;

// membuat state berupa object secara global  
const initialState = {
    value: 0,
    age: 17,
    data: 16
}

// 1. reducer 
// melakukan perubahan store secara global
// ketika state updifination atau belum di initial maka auto matis akan menjalanakan iniitial state 
const rootReducer = (state = initialState, action) => {
    // jika action type 
    // memiliki nilai sama dengan ADD_AGE maka ubah state 
    switch (action.type) {
        case 'ADD_AGE':
            return {
                // memecah state agar dapat hanya mengupdate value age  
                // mengcopy state lamanya agar nilai object lainnya selain age tidak hilang 
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                // mengambil new value dari store 
                value: state.value + action.newValue
            }
        default:
            return state
    }
}

// make store redux 
// 2. store 
// memanggil reduxer yang digunakan  
// store merupakan wadah besar untuk menampung semua state yang akan di rubah atau jalankan
const store = createStore(rootReducer);
console.log(store.getState());

// 3. subscription  
store.subscribe(()=>{ 
    // setiap terdapat perubahan maka subscribe akan dipanggil  
    console.log('store change', store.getState());
}) 

// 4. Dispaching Action 
store.dispatch({ type: 'ADD_AGE' })
// memberi value pada store 
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 })
console.log(store.getState());
