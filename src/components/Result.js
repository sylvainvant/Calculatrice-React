import React, {Component} from 'react'; 
  
// Create a Class Component Result. 
 
class Result extends Component {

  render() {
    let {result} = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

// Export Result Component. 
export default Result;