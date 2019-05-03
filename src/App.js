import React, { Component } from 'react';

import './App.css';
import Result from './components/Result';
import KeyPad from './components/KeyPad';


// Create a Class Component App. 
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            result: 0
        }
                
    }


    render() {
        if (this.state.result) {
            return console.log(this.state.result);
          }
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculatrice</h1>
                    <Result result={this.state.result}/>
                    <KeyPad onClick={() => this.setState({ result: true })}/>

                </div>
            </div>
        );
    }
}


// Export App Component. 
export default App;