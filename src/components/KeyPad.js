import React, {Component} from 'react'; 


// Create a Class Component Keypad. 
class KeyPad extends Component { 
  
    render() { 
        return ( 
            <div className="button">

                <button name="CE" className="operator" onClick={this.handleClick} >CE</button>
                <button name="("  className="operator" onClick={this.handleClick} >(</button>
                <button name=")" className="operator" onClick={this.handleClick} >)</button>
                <button name="+" className="operator" onClick={this.handleClick} >+</button><br/>

                <button name="7" onClick={this.handleClick} >7</button>
                <button name="8" onClick={this.handleClick} >8</button>
                <button name="9" onClick={this.handleClick} >9</button>
                <button name="-" className="operator" onClick={this.handleClick} >-</button><br/>

                <button name="4" onClick={this.handleClick} >4</button>
                <button name="5" onClick={this.handleClick} >5</button>
                <button name="6" onClick={this.handleClick} >6</button>
                <button name="*" className="operator" onClick={this.handleClick} >x</button><br/>

                <button name="1" onClick={this.handleClick} >1</button>
                <button name="2" onClick={this.handleClick} >2</button>
                <button name="3" onClick={this.handleClick} >3</button>
                <button name="/" className="operator" onClick={this.handleClick} >÷</button><br/>

                <button name="%" className="operator" onClick={this.handleClick} >%</button>
                <button name="0" onClick={this.handleClick} >0</button>
                <button name="." className="operator" onClick={this.handleClick} >.</button>
                <button name="=" className="egal" onClick={this.handleClick} >=</button><br/>

          </div>
             
            ); 
          } 
        } 
          
// Export Keypad Component. 
export default KeyPad; 