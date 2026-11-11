//ts-nocheck
import React , {Component} from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Fordd",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeDetail = () => {
    this.setState({
        color: "blue",
        model: "Camaro",
        year: 2020
    });
  }

  componentDidMount() {
      console.log("Component mounted");
  };//run after the component is rendered for the first time 
  // and take data from the server or perform any other side effects.
  
  componentWillUnmount() {
      console.log("Component will unmount");
  };
 componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color: {this.state.color} - Model: {this.state.model} - Year:
          {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeDetail}
        >Change details</button>
      </div>
    );
  }
}

export default Test;