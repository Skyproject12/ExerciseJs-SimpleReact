import React, { createContext, Component } from 'react';

// initial root context 
export const RootContext = createContext();
const Provider = RootContext.Provider;

const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {

            // mengeset state menjadi i global   
            state = {
                totalOrder: 0
            }

            // menampung function yang akan di buat global 
            dispatch = (action) => {
                // check action yang akan di inisialisasi secara global 
                if (action.type === 'PLUSS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if (action.type === 'MINUS_ORDER') {
                    if (this.state.totalOrder <= 0) {
                        return this.setState({ totalOrder: 0 })
                    }
                    return this.setState({
                        totalOrder: this.state.totalOrder - 1
                    })
                }
            }

            render() {
                <Provider value={ 
                    { 
                        state: this.state, 
                        dispatch: this.dispatch
                    }
                }>
                    <Children {...this.props}/>
                </Provider>
            }
        }
    )
}

export default GlobalProvider;