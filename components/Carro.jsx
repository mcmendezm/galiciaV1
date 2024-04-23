import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";
const styles = {
    button: {
        backgroundColor: '#004e18', 
        color: '#fff',
        border: 'none',
        borderRadius:'15px',
        padding:'8px 15px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Protest Riot", sans-serif',
        gap: '10px',
        transition: 'background-color 0.3s ease',
    },
    carro: {
        width: '30px',
    },
    bubble: {
        position: 'relative',
        left: '-15px',
        top:'58px',

    }
}

class Carro extends Component{
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad=carro.reduce((acc,el)=>acc+el.cantidad,0)
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad!==0 ? <BubbleAlert value={cantidad} />:null}
                </span>
                <button
                    onClick={mostrarCarro}
                    style={styles.button}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e84328'} 
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#004e18'}
                >
                <img style={styles.carro} src="/img/icons8-carrito-de-compras-50.png" alt="Carrito de compras" />Comprar</button>
                { esCarroVisible ? <DetallesCarro carro={ carro} />:null }
            </div>
        )
    }
}
export default Carro