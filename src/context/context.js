import React, { createContext, Component } from 'react';

// initial root context 
export const RootContext = createContext();
const Provider = RootContext.Provider;


// membuat high order component 
const GlobalProvider = (Children) => {
    return (
        // wajib menampbahkan class untuk menampung beberapa fungsi  
        // selain itu membutuhkan state maka harus terdapat class  
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

            // melakukan render children untuk menjalanakan context dan state global 
            // children akan menampung nilai home  
            // menajalankan global provider yang akan menampung home  
            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        {/* menyimpan props awal dari fungsi children  */}
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider;

// inisial consumer dari rootContext
const Consumer = RootContext.Consumer;

// membuat global consumer untuk menampung consumer   
export const GlobalConsumer = (Children) => {
    // children merupakan class yang akan di gujnakan GlobalConsumer 
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            // nemampung value dari context global 
                            value => {
                                return (
                                    // melakukan penyimpanan dan duplicate props yang nantinya sebagai value dari class Children  
                                    // melakukan penduplicate value untuk di kirim ke children  
                                    // harus membuat class  karena mengcopy suatu state, sedangakn di function tidak terdapat state  
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}