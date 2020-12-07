import React from "react";
import "./Div.css";

class Div extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      div: "blue",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //   handleClick() {
  //     this.setState({
  //       div: "red",
  //     });
  //   }
  handleClick() {
    this.setState((prevState, props) => {
      let nextColor;
      if (prevState.div === "blue") {
        nextColor = "red";
      } else {
        nextColor = "blue";
      }

      return {
        div: nextColor,
      };
    });
  }

  render() {
    return <div className={this.state.div} onClick={this.handleClick}></div>;
  }
}

export default Div;
