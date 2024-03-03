import { Component } from "react";
const styles = {
    sections: {
        height: '60px',
        backgroundColor: '#7c4c46',
        display: 'flex',
    },
    ul: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        margin: '0 100px',
        listStyleType: 'none',
        padding:'0 100px'
    },
    a: {
    color: '#fff',
    textDecoration: 'none',
}
}

class Sections extends Component {
    render() {
        return (
            <div style={styles.sections}>
                <ul style={styles.ul}>
                    <li><a style={styles.a} href="#historia">Nuestra Historia</a></li>
                    <li><a style={styles.a} href="#productos">Nuestros productos</a></li>
                    <li><a style={styles.a} href="#ubicacion">Ubicación</a></li>
                    <li><a style={styles.a} href="#redes">Contactanos</a></li>
                </ul>
            </div>
        )
    }
}
export default Sections