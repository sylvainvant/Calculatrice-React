import React, { Component } from 'react';

import './App.css';
import Result from './components/Result';
import KeyPad from './components/KeyPad';


// Create a Class Component App. 
class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

   

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculatrice</h1>
                    <Result result={this.state.result}/>
                    <KeyPad />
                </div>
            </div>
        );
    }
}


// Export App Component. 
export default App;