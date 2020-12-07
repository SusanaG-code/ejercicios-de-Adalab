import React from "react";
import "./Paragraph.css";

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.props.handleChangeInput();
  }
  render() {
    return (
      <div className="div">
        <p className="text" onClick={this.handleChange}></p>
      </div>
    );
  }
}

Paragraph.propTypes = {};
export default Paragraph;
