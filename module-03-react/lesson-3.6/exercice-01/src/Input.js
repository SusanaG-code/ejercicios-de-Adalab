import React from "react";
import "./Input.css";
import Paragraph from "./Paragraph";

// Vamos a partir de una web sencilla con un input de tipo texto y un párrafo vacío. ¿Seremos capaces de hacer que con React y el estado, cuando modificamos el input aparezca el texto en el párrafo?

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hola",
    };
  }

  handleChangeInput(ev) {
    alert("hola");
  }

  render() {
    return (
      <div>
        <input type="text"></input>
        <Paragraph handleChangeInput={this.handleChangeInput}></Paragraph>
      </div>
    );
  }
}

export default Input;
