import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";

const styles = {
  navbar: {
    color: '#3e2623',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '0 100px',
position: 'sticky', 
    top: 0, 
    zIndex: 9999,
    width: '86%', 
    left: 0, 
    right: 0 
  }
}

class Navbar extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro carro={carro} esCarroVisible={esCarroVisible} mostrarCarro={ mostrarCarro} />
      </nav>
    );
  }
}

export default Navbar;
