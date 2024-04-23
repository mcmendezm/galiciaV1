import React, { Component } from "react";
import Button from "./Button";

const styles = {
  producto: {
    border: "solid 0.2px #3e2623",
    boxShadow:
      "-27px 25px 27px 3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
    width: "30%",
    padding: "10px 15px",
    borderRadius: "5px",
    margin: "10px",
    backgroundColor: "#f0e9e3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s, border 0.3s", 
    cursor: "pointer", 
  },
  img: {
    width: "100%",
  },
};

class Producto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false, 
    };
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { producto, agregarAlCarro } = this.props;
    const { hover } = this.state;

    return (
      <div
        style={{
          ...styles.producto,
          transform: hover ? "scale(1.1)" : "scale(1)", 
          border: hover ? "solid 2px #e84328" : "solid 0.2px #3e2623", 
        }}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <img style={styles.img} src={producto.img} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p>Precio: ${producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>Agregar al carro</Button>
      </div>
    );
  }
}

export default Producto;
