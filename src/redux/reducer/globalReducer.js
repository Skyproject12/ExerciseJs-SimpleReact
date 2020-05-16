import React from 'react'; 
import ActionType from './globalActionType';

const globalState = { 
    totalOrder: 0
  } 
  
  // 1. Reducer 
  // globalState memberi initial state awal 
  const rootReducer = (state = globalState, action) =>{  
    if(action.type === ActionType.PLUSS_ORDER){ 
      return {  
        // melakukan copy state lama 
        ...state,  
        // menambahkan total order satu 
        totalOrder: state.totalOrder + 1
      }
    } 
    if(action.type === ActionType.MINUS_ORDER){  
      if(state.totalOrder<= 0){ 
        return { 
          ...state, 
          titalOrder: 0
        };
      }
      return { 
        ...state, 
        totalOrder: state.totalOrder -1
      }
    }
    return state;
  }

  export default rootReducer;